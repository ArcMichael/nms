import Router from 'koa-router';
import log4js from "log4js";
import { AuthModel, AuthTokenModel } from "../../models/index"
import { DataTransferObject } from "../../controllers/DataTransferObject";
import jwtOptions from "../../../config/JWT"
const { secret, tokenExpiresTime, token_mly } = jwtOptions;
const jwt = require('jsonwebtoken');
import md5 from 'md5';

const router = new Router({
    prefix: '/auth'
});

router.get('/used', async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    return await dataTransferObject.success('used');
})

router.post('/login', async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    let { request, query } = ctx;
    let { body } = request;
    let { username, password, secret = "" } = body;

    if( secret == "" ){
        return await dataTransferObject.error('-5')
    }
    // console.log(username, password);
    const passwordMD5 = md5(password);
    console.log(password)
    console.log(passwordMD5)
    const auth = await AuthModel.findOne({
        username, passwordMD5
    })
    let auth_token;
    if( auth ){
        auth_token = jwt.sign({ username, passwordMD5 }, secret);
        console.log(auth_token)
        return await dataTransferObject.success('login', auth_token);
    }else{
        return await dataTransferObject.error('-5')
    }

    
})

router.post('/logoff', async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    return await dataTransferObject.success('logoff', '')

})

router.post('/register', async (ctx, next) => {
    const dataTransferObject = new DataTransferObject(ctx);
    let { request, query } = ctx;
    let { body } = request;
    let { header } = request;
    let { username, password } = body;
    let { token = "" } = header;
    const passwordMD5 = md5(password);  

    if (token !== token_mly) {
        return await dataTransferObject.error(-8)
    }

    const auth = await AuthModel.findOne({
        username, passwordMD5
    })

    if (auth) {
        return await dataTransferObject.success("username is used.")
    } else {
        const create = await AuthModel.create({
            username, passwordMD5
        })
        if (create) {
            return await dataTransferObject.success("create new user.")
        } else {
            return await dataTransferObject.success("create is error.")
        }
    }
})

router.all('/*', ctx => {
    ctx.body = "default obligate api/auth"
})

export default router


// var mongoDB = 'mongodb://localhost:27017/next';
// var mongoOpt = { useNewUrlParser: true }
// mongoose.connect(mongoDB, mongoOpt);

// var db = mongoose.connection;

// interface OrderDocument extends Document {
//     user: string;
//     type: string;
//     status: number;
//     currencyCode: string;
//     paymentTypes: string;
//     price: string;
//     unit: string;
//     quantity: number;
//     minAmount: number;
//     maxAmount: number;
//     description: string;
//     createTime?: string;
//     updateTime?: string;
// }

// const OrderSchema: Schema = new Schema({
//     user: { type: Schema.Types.ObjectId, require: true, ref: 'User'},
//     price: { type: String, required: true },
//     type: { type: String, required: true, default: 'sell', enum: ['sell', 'buy'] },
//     status: { type: Number, required: true, default: 0, enum: [0, 1, 2] }, 
//     currencyCode: { type: String, required: true, default: 'btc' },
//     paymentTypes: { type: String, required: true, default: '1' },
//     unit: { type: String, required: true, default: 'CNY' },
//     quantity: { type: Number, required: true, default: 0 },
//     minAmount: { type: Number, required: true, default: 0 },
//     maxAmount: { type: Number, required: true, default: 0 },
//     description: String,
//     createTime: { type: Date, default: Date.now },
//     updateTime: { type: Date, default: Date.now },
// });

// const OrderModel: Model<OrderDocument> = model('order', OrderSchema);

// create
// OrderModel.create({
//     price: 'price',
//     type: 'buy',
//     status: 0,
//     currencyCode: 'btc',
//     paymentTypes: '1',
//     unit: 'CNY',
//     quantity: 0,
//     minAmount: 0,
//     maxAmount: 0
// })

// remove
// OrderModel.findByIdAndRemove('5d2c28450a93b851955e620a',(err, res) => {
    // console.log(err)
    // console.log(res)
// })

// update
// OrderModel.findByIdAndUpdate('5d2c2842b5823a5186577b42',{ status: 1 }, (err, res) => {
//     console.log(err)
//     console.log(res)
// })

// find
// OrderModel.find().exec((err, docs) => {
//     console.log(docs)
// })