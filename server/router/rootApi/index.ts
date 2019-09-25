import Router from 'koa-router';
// import redis from "./redis";
import useragent from "../useragent";
import auth from "../auth";
import inspect from "../inspect";

const router = new Router({
    prefix: '/api'
});

router.use(inspect.routes(), inspect.allowedMethods())
    .all('*', ctx => { ctx.body = "default obligate apis" })

export default router
