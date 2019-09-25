import Router from 'koa-router';
import { HealthCheckDataTransferObject } from "../../controllers/HealthCheckDataTransferObject";

const router = new Router({
    prefix: '/checkhealth'
});

router.get('*', async (ctx, next) => {
    const healthCheckDataTransferObject = new HealthCheckDataTransferObject(ctx)
    return await healthCheckDataTransferObject.success("Health")
})

router.all('*', ctx => {
    ctx.body = "default obligate healthCheck"
})

export default router
