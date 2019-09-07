import http from 'http';
import log4js from "log4js";

import Koa from "koa";
const app = new Koa();

import router from './router'
import checkHealthRouter from "./checkHealth"

import serverOptions from "../config/Servers";
const { port } = serverOptions;

import jwtOptions from "../config/JWT"
const { secret } = jwtOptions;

import { Debugs } from "./loaders/Debug";
import { Loggers } from "./loaders/Logger";

const loggers = new Loggers()
loggers.configuration();
const Logger_Auth = log4js.getLogger('Auth');

import { MongoController } from "../common/loaders/Mongo"
const mongoController = new MongoController();
mongoController.db.connection;
// mongoController.db.set('useCreateIndex', true);
mongoController.db.on('error', console.error.bind(console, "mongoDB connection error:"));

const jwtKoa = require('koa-jwt');
import { DataTransferObject } from "./controllers/DataTransferObject"

// console.log( process.env )

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx)
    return await next().catch(async (err) => {
        const err_message = err.originalError ? err.originalError.message : err.message;
        Logger_Auth.info(JSON.stringify(dataTransferObject.AuthorizedGhostInfo()))
        // Logger_Auth.info()
        if (err.status === 401) {
            return await dataTransferObject.authorized( err_message )
        } else {
            throw err;
        }
    });
});

// beforeSend:function(xhr){
//     xhr.setRequestHeader("Authorization", 'Bearer Token')
// }

// Middleware below this line is only reached if JWT token is valid
app.use(jwtKoa({ secret }).unless({
    path: [
        /\/api\/auth\/login/,
        /\/api\/auth\/logoff/,
        /\/api\/auth\/register/
    ]
}));

import bodyParser from 'koa-bodyparser';
app.use(bodyParser())

app
    .use(checkHealthRouter.routes())
    .use(checkHealthRouter.allowedMethods())
    .use(router.routes())
    .use(router.allowedMethods())

app.use(async (ctx: any) => {

})

app.on('error', (err: any) => {
    console.error('server error', err)
});

http.createServer(app.callback()).listen(port)

// app.listen(Environment.port);