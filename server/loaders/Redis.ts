import serverOptions from "../../config/Servers";
const { port, redisConf } = serverOptions;

const redisPoolName = 'redisPool';

class RedisController {
    redisPool: any;
    constructor(options: any) {
        this.redisPool = require('redis-connection-pool')(redisPoolName, Object.assign({}, redisConf, options))
    }

    async set(key:any, value:any){
        await this.redisPool.set(key, value, (err:any) => {
            return err
        })
    }
}

export { RedisController }