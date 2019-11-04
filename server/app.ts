import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as path from 'path';

// import * as dotenv from 'dotenv';

import * as dotenv from "dotenv"
dotenv.config({ path: path.resolve(__dirname, "../.env") })

import * as React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom";

// import webpackDevMiddleware from 'webpack-dev-middleware';
// const config = require('../webpack/webpack.config');

// interface Config{
//     PORT: number;
//     NODE_ENV: string;
//     DotenvParseOutput:void;
// }

// const { PORT } = 

// console.log(PORT)
// console.log(config.NODE_ENV || "")



// let { parsed } = dotenv.config();
// let { ...config } = parsed
// let _PORT_ = config.PORT || 60021;
// console.log(config.PORT)

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

console.log('isDevMode', isDevMode)
console.log('isProdMode', isProdMode)

const app = new Koa();
const router = new Router();

// if (isDevMode) {
//     const webpack = require('webpack');
//     const config = require('../webpack/client.dev.js');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//     const compiler = webpack(config);

//     app.use(webpackDevMiddleware(compiler, {
//         publicPath: config.output.publicPath,
//     }));
//     app.use(webpackHotMiddleware(compiler));
// }

app.use(json())
app.use(logger())

app.use(router.routes()).use(router.allowedMethods());

// if (process.env.NODE_ENV !== 'production') {
//     console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');
//     const config = require('../webpack/webpack.2.develop');
//     const compiler = webpack(config);

//     app.use(webpackDevMiddleware(compiler,{
//         publicPath: config.output.publicPath
//     }))

//     app.use(webpackHotMiddleware(compiler))


// } else {
//     console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
// }

export default app