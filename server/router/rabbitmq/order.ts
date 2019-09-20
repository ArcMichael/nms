import Router from 'koa-router';
import { RabbitMQ } from "../../../common/loaders/RabbitMQ";
import { DataTransferObject } from "../../controllers/DataTransferObject"

const mq = new RabbitMQ();

mq.receiveQueueMsg('testQueue')

const router = new Router({
    prefix: '/order'
});

router
    .get("/send", async ctx => {
        const dataTransferObject = new DataTransferObject(ctx)
        await mq.sendQueueMsg('testQueue', (new Date).getTime().toString())
            .then(res => {
                return dataTransferObject.success(res)
            }).catch(err => {
                return dataTransferObject.error(err)
            })

    })

router.post("/hset", async ctx => {

})

router.post("/lpysh", async ctx => {

})

router.post("/rpush", async ctx => {

})

router.all('/*', ctx => {
    ctx.body = "default obligate api/rabbitmq/order"
})

export default router