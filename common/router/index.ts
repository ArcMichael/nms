import Router from 'koa-router';
import inspect from "./inspect";

const router = new Router({
    prefix: '/api'
});

router.all('/*', ctx => {
    ctx.body = "default obligate api"
})

export default router
