import Router from 'koa-router';
import { RedisController } from "../../loaders/Redis";
const redisController = new RedisController({ database: 1 })

import { DataTransferObject } from "../../controllers/DataTransferObject"

const router = new Router({
    prefix: '/order'
});

router
    .get("/get", async => {

    })
    .post("/set", async ctx => {

    })
    .post("/expire", async ctx => {

    })
    .get("/hget", async ctx => {

    })
    .get("/hgetall", async ctx => {

    })
    .post("/hset", async ctx => {
        
    })

router.post("/hset", async ctx => {

})

router.post("/lpysh", async ctx => {

})

router.post("/rpush", async ctx => {

})

router.all('/*', ctx => {
    ctx.body = "default obligate api/redis/order"
})

export default router
