import Router from 'koa-router';
// import redis from "./redis";

import RootApi from "./rootApi";
// import RootPublic from "./rootPublic";
import rootCheckHealth from "./rootCheckHealth";

const router = new Router({
    prefix: '/nms'
});

router.use(RootApi.routes(), RootApi.allowedMethods())
    .use(rootCheckHealth.routes(), rootCheckHealth.allowedMethods())
    // .use(RootPublic.routes(), RootPublic.allowedMethods())
    // .all('*', ctx => { ctx.body = "default obligate apis" })

export default router
