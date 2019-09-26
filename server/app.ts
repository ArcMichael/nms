import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as path from 'path';

// import * as dotenv from 'dotenv';

import * as dotenv from "dotenv"

dotenv.config({ path: path.resolve(__dirname, "../.env") })

// interface Config{
//     PORT: number;
//     NODE_ENV: string;
//     DotenvParseOutput:void;
// }

// const { PORT } = 

// console.log(PORT)
// console.log(config.NODE_ENV || "")



// let { parsed } = dotenv.config();
// let { ...config } = parsed
// let _PORT_ = config.PORT || 60021;
// console.log(config.PORT)

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

console.log(isDevMode, isProdMode)

const app = new Koa();
const router = new Router();

// if( isDevMode ){
//     console.log('isDevMode')
// }

router.get('/', async (ctx, next) => {
    ctx.body = { msg: "KOA" } 
    await next();
})

app.use(json())
app.use(logger())

app.use(router.routes()).use( router.allowedMethods());

app.listen(3000, () => {
    console.log(`Server Started.`);
});