export default {
    appenders: [{
        name: "Generic",
        filename: 'logs/Generic.log',
        level: "ALL"
    }, {
        name: "Api",
        filename: 'logs/Api.log',
        level: "ALL"
    }, {
        name: "Redis",
        filename: 'logs/Redis.log',
        level: "ALL"
    }, {
        name: "Cpu",
        filename: 'logs/Cpu.log',
        level: "ALL"
    }, {
        name: "Memory",
        filename: 'logs/Memory.log',
        level: "ALL"
    }, {
        name: "Auth",
        filename: 'logs/Auth.log',
        level: "ALL"
    }]
}

