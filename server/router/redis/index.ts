import Router from 'koa-router';
import order from "./order";

const router = new Router({
    prefix: '/redis'
});

router.use(order.routes(), order.allowedMethods())

router.all('/*', ctx => {
    ctx.body = "default obligate api/redis"
})

export default router
