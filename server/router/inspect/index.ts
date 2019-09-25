import Router from 'koa-router';
import log4js from "log4js";
import { AuthModel, AuthTokenModel } from "../../models/index"
import { DataTransferObject } from "../../controllers/DataTransferObject";
import jwtOptions from "../../../config/JWT"
import * as server from "../../../config/Servers"
const { secret, tokenExpiresTime, token_mly } = jwtOptions;
const jwt = require('jsonwebtoken');
import md5 from 'md5';

const router = new Router({
    prefix: '/inspect'
});

router.get('/system', async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    return await dataTransferObject.success(Object.assign({},server));
})

router.all('*', ctx => {
    ctx.body = "default obligate api/inspect"
})

export default router
