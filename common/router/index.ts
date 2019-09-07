import Router from 'koa-router';
import redis from "./redis";
import rabbitmq from "./rabbitmq";
import useragent from "./useragent";
import auth from "./auth";
import inspect from "./inspect";

const router = new Router({
    prefix: '/api'
});

router.use(redis.routes(), redis.allowedMethods());
// router.use(rabbitmq.routes(), rabbitmq.allowedMethods());
router.use(useragent.routes(), useragent.allowedMethods());
router.use(auth.routes(), auth.allowedMethods());
router.use(inspect.routes(), inspect.allowedMethods());

router.all('/*', ctx => {
    ctx.body = "default obligate api"
})

export default router
