import Router from 'koa-router';
import order from "./order";

const router = new Router({
    prefix: '/rabbitmq'
});

router.use(order.routes(), order.allowedMethods())

router.all('/*', ctx => {
    ctx.body = "default obligate api/rabbitmq"
})

export default router
