import Router from 'koa-router';
import Static from "koa-static";
import path from "path";

// /Applications/workspace/Bitbbucket/ArcMichael/nms/public/vQyCIlASwg.txt

const router = new Router({
    prefix: '/public'
});

let staticPath = path.join(__dirname,"../../../public");
console.log(staticPath)

router.all("*", Static(`${staticPath}/vQyCIlASwg.txt`))

// router.all('*', ctx => {
//     ctx.body = "default obligate api/public"
// })

export default router
