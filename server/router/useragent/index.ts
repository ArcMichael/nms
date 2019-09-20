import Router from 'koa-router';
import log4js from "log4js";
import { DataTransferObject } from "../../controllers/DataTransferObject";

const Generic = log4js.getLogger('Generic');

const router = new Router({
    prefix: '/useragent'
});

router.get('/get', (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    let _dataTransferObjectPmplements = {
        getUserAgentParser: dataTransferObject.getUserAgentParser(),
        getSephoraUserAgentParser: dataTransferObject.getSephoraUserAgentParser(),
        isSephora: dataTransferObject.userAgent.isSephora,
        isAndroid: dataTransferObject.userAgent.isAndriod,
        isIos: dataTransferObject.userAgent.isIos,
        isWechat: dataTransferObject.userAgent.isWechat,
        isMiniProgram: dataTransferObject.isMiniProgram()
    }
    Generic.info(JSON.stringify(_dataTransferObjectPmplements))
    return dataTransferObject.success(
        _dataTransferObjectPmplements
    )
})

router.all('/*', ctx => {
    ctx.body = "default obligate api/useragent"
})

export default router
