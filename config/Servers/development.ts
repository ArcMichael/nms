export default {
    identity: "development",
    port: 4100,
    redisConf: {
        host: '172.18.0.1',
        port: 6379,
        max_clients: 5,
        perform_checks: false,
        database: 0,
        options: {
            auth_pass: 'UzE9M8JGL8I6'
        }
    },
    mongooseConf: {
        url: 'mongodb://172.25.0.1:27017/next',
        options: {
            socketTimeoutMS: 0,
            keepAlive: true,
            reconnectTries: 30,
            reconnectInterval: 500,
            poolSize: 5,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    }
}