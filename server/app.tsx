import http from 'http'
import log4js from 'log4js'
import path from 'path'

import Koa from 'koa'
import _ from 'koa-route'
import serve from "koa-static";

const app = new Koa()

import router from './router'
// import checkHealthRouter from './router/checkHealth'

import serverOptions from '../config/Servers'
const { port } = serverOptions

import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'

import routes from '../client/routes'

// import jwtOptions from "../config/JWT"
// const { secret } = jwtOptions;

import { Debugs } from './loaders/Debug'
import { Loggers } from './loaders/Logger'

const loggers = new Loggers()
loggers.configuration()
const Logger_Auth = log4js.getLogger('Auth')

// import { MongoController } from "../common/loaders/Mongo"
// const mongoController = new MongoController();
// mongoController.db.connection;
// // mongoController.db.set('useCreateIndex', true);
// mongoController.db.on('error', console.error.bind(console, "mongoDB connection error:"));

// const jwtKoa = require('koa-jwt');
import { DataTransferObject } from './controllers/DataTransferObject'

import bodyParser from 'koa-bodyparser'
import { StaticRouter } from 'react-router'

app.use(bodyParser())
  .use(serve(path.join(__dirname, "./public/")))
  // .use(checkHealthRouter.routes())
  // .use(checkHealthRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())
// app.use(Koastatic(__dirname,"dist"))

const response = {
  catch: (ctx: any) => {
    ctx.body = `404`
  },
  ssr: (ctx: any, path: any) => {
    console.log(ctx.req.url)
    let html = renderToString(
      <StaticRouter context={{}} location={ctx.req.url}>
        <Fragment>
          <div className="container" style={{ marginTop: 30 }}>
            {routes}
          </div>
        </Fragment>
      </StaticRouter>
    )
    ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
    </html>
    `
  }
}

app
// .use(_.all('*', response.ssr))
// app
  .use(_.all(['/nms/*'], response.ssr))
  .use(_.all('*', response.catch));


app.on('error', (err: any) => {
  console.error('server error', err)
})

http.createServer(app.callback()).listen(port)

// app.listen(Environment.port);
