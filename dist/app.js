/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(__webpack_require__(1));
const koa_1 = __importDefault(__webpack_require__(2));
const koa_bodyparser_1 = __importDefault(__webpack_require__(3));
const router_1 = __importDefault(__webpack_require__(4));
const checkHealth_1 = __importDefault(__webpack_require__(13));
const DataTransferObject_1 = __webpack_require__(9);
const Servers_1 = __importDefault(__webpack_require__(15));
const Logger_1 = __webpack_require__(19);
const { port } = Servers_1.default;
const app = new koa_1.default();
const loggers = new Logger_1.Loggers();
loggers.configuration();
app.use(koa_bodyparser_1.default());
app
    .use(checkHealth_1.default.routes())
    .use(checkHealth_1.default.allowedMethods())
    .use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.use(async (ctx) => {
    const dataTransferObject = new DataTransferObject_1.DataTransferObject(ctx);
    const _results = {
        parser: await dataTransferObject.getUserAgentParser(),
        sephoraParser: await dataTransferObject.getSephoraUserAgentParser()
    };
    ctx.status = 404;
    ctx.body = _results;
});
app.on('error', (err) => {
    console.error('server error', err);
});
http_1.default.createServer(app.callback()).listen(port);
// app.listen(Environment.port);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(__webpack_require__(5));
const v1_1 = __importDefault(__webpack_require__(6));
const router = new koa_router_1.default({
    prefix: '/api'
});
router.use(v1_1.default.routes(), v1_1.default.allowedMethods());
router.all('/*', ctx => {
    ctx.body = "default obligate api";
});
exports.default = router;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(__webpack_require__(5));
const log4js_1 = __importDefault(__webpack_require__(7));
const useragent_1 = __importDefault(__webpack_require__(8));
const Generic = log4js_1.default.getLogger('Generic');
const Api = log4js_1.default.getLogger('Api');
const Cpu = log4js_1.default.getLogger('Cpu');
const Memory = log4js_1.default.getLogger('Memory');
const router = new koa_router_1.default({
    prefix: '/v1'
});
router.use(useragent_1.default.routes(), useragent_1.default.allowedMethods());
// router.get('/dto', async (ctx, next) => {
//     const dataTransferObject = new DataTransferObject(ctx);
//     Generic.info(mockjs.Random.paragraph(1))
//     Generic.error(mockjs.Random.paragraph(1))
//     Generic.warn(mockjs.Random.paragraph(1))
//     Api.info(mockjs.Random.paragraph(1))
//     Api.error(mockjs.Random.paragraph(1))
//     Api.warn(mockjs.Random.paragraph(1))
//     Cpu.info(mockjs.Random.paragraph(1))
//     Cpu.error(mockjs.Random.paragraph(1))
//     Cpu.warn(mockjs.Random.paragraph(1))
//     Memory.info(mockjs.Random.paragraph(1))
//     Memory.error(mockjs.Random.paragraph(1))
//     Memory.warn(mockjs.Random.paragraph(1))
//     return dataTransferObject.error({
//         c: 1
//     })
//     // console.log(dataTransferObject.getUserIp())
// })
router.all('/*', ctx => {
    ctx.body = "default obligate api/v1";
});
exports.default = router;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(__webpack_require__(5));
const log4js_1 = __importDefault(__webpack_require__(7));
const DataTransferObject_1 = __webpack_require__(9);
const Generic = log4js_1.default.getLogger('Generic');
const router = new koa_router_1.default({
    prefix: '/ua'
});
router.get('/getUA', (ctx, next) => {
    const dataTransferObject = new DataTransferObject_1.DataTransferObject(ctx);
    let _dataTransferObjectPmplements = {
        getUserAgentParser: dataTransferObject.getUserAgentParser(),
        getSephoraUserAgentParser: dataTransferObject.getSephoraUserAgentParser(),
        isSephora: dataTransferObject.userAgent.isSephora,
        isAndroid: dataTransferObject.userAgent.isAndriod,
        isIos: dataTransferObject.userAgent.isIos,
        isWechat: dataTransferObject.userAgent.isWechat,
        isMiniProgram: dataTransferObject.isMiniProgram()
    };
    Generic.info(JSON.stringify(_dataTransferObjectPmplements));
    return dataTransferObject.success(_dataTransferObjectPmplements);
});
router.all('/*', ctx => {
    ctx.body = "default obligate api/v1/useragent";
});
exports.default = router;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Content_1 = __webpack_require__(10);
class DataTransferObject extends Content_1.Content {
    constructor(ctx) {
        super(ctx.req, ctx.res);
        this.ctx = ctx;
    }
    success(results) {
        this.ctx.status = 200;
        this.ctx.body = {
            results: results,
            errorCode: 0,
            errorMessage: '',
            timestamp: new Date().getTime()
        };
    }
    error(error) {
        this.ctx.status = 404;
        this.ctx.body = {
            results: null,
            errorCode: 1,
            errorMessage: error,
            timestamp: new Date().getTime()
        };
    }
}
exports.DataTransferObject = DataTransferObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UserAgent_1 = __webpack_require__(11);
class Content {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.userAgent = new UserAgent_1.UserAgent(this.headers['user-agent']);
        /**
         * for isMiniPrograms
         */
        this._referrer = this.headers.referrer || this.headers.referer || "";
    }
    getUserIp() {
        return this.request.headers['x-forwarded-for'] ||
            this.request.connection.remoteAddress ||
            this.request.socket.remoteAddress ||
            this.request.connection.socket.remoteAddress;
    }
    isMiniProgram() {
        if (this.referrer.search(/page-frame.html/) > -1) {
            return true;
        }
        return false;
    }
    getSephoraUserAgentParser() {
        return this.userAgent.getSephoraUserAgentParser();
    }
    getUserAgentParser() {
        return this.userAgent.getUserAgentParser();
    }
    get referrer() {
        return this._referrer;
    }
    get headers() {
        return this.request.headers;
    }
    get method() {
        return this.request.method;
    }
    get url() {
        return this.request.url;
    }
    get originalUrl() {
        return this.request.originalUrl;
    }
    get href() {
        return this.request.href;
    }
    get path() {
        return this.request.path;
    }
    get querystring() {
        return this.request.querystring;
    }
    get host() {
        return this.request.host;
    }
    get URL() {
        return this.request.URL;
    }
    get type() {
        return this.request.type;
    }
    get charset() {
        return this.request.charset;
    }
    get query() {
        return this.request.query;
    }
    get fresh() {
        return this.request.fresh;
    }
    get stale() {
        return this.request.stale;
    }
    get protocol() {
        return this.request.protocol;
    }
    get secure() {
        return this.request.secure;
    }
    get ip() {
        return this.request.ip;
    }
    get ips() {
        return this.request.ips;
    }
    get subdomains() {
        return this.request.subdomains;
    }
}
exports.Content = Content;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ua_parser_js_1 = __webpack_require__(12);
class UserAgent {
    constructor(useragent) {
        this._isIos = false;
        this._isAndroid = false;
        this._isWechat = false;
        this._isMiniProgram = false;
        this.useragent = useragent;
        this.useragentLower = useragent.toLocaleLowerCase();
        this.uaParserJs = new ua_parser_js_1.UAParser(useragent);
        try {
            this._isIos = this.uaParserJs.getOS().name.toLocaleLowerCase() === "ios";
        }
        catch (e) { }
        try {
            this._isAndroid = this.uaParserJs.getOS().name.toLocaleLowerCase() === "android";
        }
        catch (e) { }
        try {
            this._isWechat = this.uaParserJs.getUA().indexOf('MicroMessenger') > -1;
        }
        catch (e) { }
        try {
            this._isMiniProgram = this.uaParserJs.getUA().indexOf('miniProgram') > -1;
        }
        catch (e) { }
    }
    getUserAgentParser() {
        return this.uaParserJs.getResult();
    }
    getSephoraUserAgentParser() {
        return {
            tag: this.tag,
            scale: this.scale,
            screenSize: this.screenSize,
            platform: this.platform,
            version: this.version,
            isSephora: this.isSephora
        };
    }
    get isIos() {
        return this._isIos;
    }
    get isWechat() {
        return this._isWechat;
    }
    get isAndriod() {
        return this._isAndroid;
    }
    get tag() {
        if (this.isSephora) {
            try {
                return this.useragentLower.search(/sephora\/app/) > -1;
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    get scale() {
        const _value = this.value;
        if (_value) {
            try {
                return _value.match(/(scale\/([\d\.]+))/)[2];
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    get screenSize() {
        const _value = this.value;
        if (_value) {
            try {
                const wh = _value.match(/(screensize\/([\d\.x]+))/)[2];
                return {
                    width: wh.split('x')[0],
                    height: wh.split('x')[1]
                };
            }
            catch (e) {
                return {
                    width: false,
                    height: false
                };
            }
        }
        return {
            width: false,
            height: false
        };
    }
    get platform() {
        const _value = this.value;
        if (_value) {
            try {
                return _value.match(/(iphone|android phone|android ecwall)/)[0];
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    get value() {
        if (this.isSephora) {
            try {
                return this.useragentLower.match(/\([^)]*\)/)[0];
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    get version() {
        if (this.isSephora) {
            try {
                return this.useragentLower.match(/^sephora\/([\d\.]+)/)[1];
            }
            catch (e) {
                return false;
            }
        }
        return false;
    }
    get isSephora() {
        return this.useragent.search(/^Sephora/) > -1;
    }
}
exports.UserAgent = UserAgent;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("ua-parser-js");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(__webpack_require__(5));
const HealthCheckDataTransferObject_1 = __webpack_require__(14);
const router = new koa_router_1.default({
    prefix: '/checkHealth'
});
router.get('*', async (ctx, next) => {
    const healthCheckDataTransferObject = new HealthCheckDataTransferObject_1.HealthCheckDataTransferObject(ctx);
    return await healthCheckDataTransferObject.success("Health2");
});
router.all('/*', ctx => {
    ctx.body = "default obligate healthCheck";
});
exports.default = router;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DataTransferObject_1 = __webpack_require__(9);
class HealthCheckDataTransferObject extends DataTransferObject_1.DataTransferObject {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
    }
    success(results) {
        this.ctx.status = 200;
        this.ctx.body = results;
    }
    error(error) {
        this.ctx.status = 404;
        this.ctx.body = error;
    }
}
exports.HealthCheckDataTransferObject = HealthCheckDataTransferObject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = __importDefault(__webpack_require__(16));
const production_1 = __importDefault(__webpack_require__(17));
const Environment_1 = __importDefault(__webpack_require__(18));
// const Environment = isProd ? production : development;
let Environment = Environment_1.default ? production_1.default : development_1.default;
exports.default = Environment;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    identity: "development",
    port: 4000
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    identity: "production",
    port: 4001
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let environment = "none" === 'production';
// console.log(process.env.NODE_ENV)
exports.default = environment;
// const Environment = process.env.NODE_ENV === 'production';
// export default Environment


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(__webpack_require__(7));
const Loggers_1 = __importDefault(__webpack_require__(20));
class Loggers {
    constructor() {
        this.setting = {
            pattern: ".yyyy-MM-dd.log",
            maxLogSize: 209715200,
            alwaysIncludePattern: true,
            daysToKeep: 14,
            backups: 20,
            encoding: 'utf-8',
            type: 'dateFile'
        };
        this.config = Loggers_1.default;
    }
    get get_appenders() {
        let appenders = {};
        this.config.appenders.map((data, index) => {
            appenders[data['name']] = Object.assign({ filename: data.filename }, this.setting);
        });
        return appenders;
    }
    get get_categories() {
        let categories = {};
        let level = 'ALL';
        // let default: any;
        this.config.appenders.map((data, index) => {
            categories[data['name']] = {
                appenders: [data.name],
                level
            };
        });
        return Object.assign({}, categories, { default: {
                appenders: ['Generic'], level
            } });
    }
    configuration() {
        log4js_1.default.configure({
            appenders: this.get_appenders,
            categories: this.get_categories,
            pm2: true,
            pm2InstanceVar: "INSTANCE_ID"
        });
    }
}
exports.Loggers = Loggers;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = __importDefault(__webpack_require__(21));
const production_1 = __importDefault(__webpack_require__(22));
const Environment_1 = __importDefault(__webpack_require__(18));
// const Environment = isProd ? production : development;
let Environment = Environment_1.default ? production_1.default : development_1.default;
exports.default = Environment;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
        }]
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
        }]
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2FwcC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWJvZHlwYXJzZXJcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vcm91dGVyL3YxL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZzRqc1wiIiwid2VicGFjazovLy8uL2NvbW1vbi9yb3V0ZXIvdjEvdXNlcmFnZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbW1vbi9jb250cm9sbGVycy9EYXRhVHJhbnNmZXJPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnRyb2xsZXJzL0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnRyb2xsZXJzL1VzZXJBZ2VudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1YS1wYXJzZXItanNcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vY2hlY2tIZWFsdGgvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnRyb2xsZXJzL0hlYWx0aENoZWNrRGF0YVRyYW5zZmVyT2JqZWN0LnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9TZXJ2ZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9TZXJ2ZXJzL2RldmVsb3BtZW50LnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9TZXJ2ZXJzL3Byb2R1Y3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL0Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2NvbW1vbi9sb2FkZXJzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvTG9nZ2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvTG9nZ2Vycy9kZXZlbG9wbWVudC50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvTG9nZ2Vycy9wcm9kdWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkEsdURBQXdCO0FBQ3hCLHNEQUFzQjtBQUV0QixpRUFBd0M7QUFFeEMseURBQTZCO0FBQzdCLCtEQUE2QztBQUM3QyxvREFBc0U7QUFFdEUsMkRBQXVDO0FBR3ZDLHlDQUEyQztBQUMzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsaUJBQU0sQ0FBQztBQUV4QixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksZ0JBQU8sRUFBRTtBQUM3QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxFQUFFLENBQUM7QUFFckIsR0FBRztLQUNFLEdBQUcsQ0FBQyxxQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUMvQixHQUFHLENBQUMscUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkMsR0FBRyxDQUFDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDcEIsR0FBRyxDQUFDLGdCQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUU7SUFDaEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sUUFBUSxHQUFHO1FBQ2IsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUMsa0JBQWtCLEVBQUU7UUFDckQsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUMseUJBQXlCLEVBQUU7S0FDdEU7SUFDRCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVE7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFFOUMsZ0NBQWdDOzs7Ozs7O0FDM0NoQyxpQzs7Ozs7O0FDQUEsZ0M7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7Ozs7QUNBQSw2REFBZ0M7QUFDaEMscURBQXNCO0FBRXRCLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQU0sQ0FBQztJQUN0QixNQUFNLEVBQUUsTUFBTTtDQUNqQixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxZQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFDbkIsR0FBRyxDQUFDLElBQUksR0FBRyxzQkFBc0I7QUFDckMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTTs7Ozs7OztBQ2JyQix1Qzs7Ozs7Ozs7Ozs7O0FDQUEsNkRBQWdDO0FBQ2hDLHlEQUE0QjtBQUU1Qiw0REFBb0M7QUFFcEMsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUMsTUFBTSxHQUFHLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsTUFBTSxHQUFHLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFJMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBTSxDQUFDO0lBQ3RCLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQztBQUdILE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxtQkFBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRTFELDRDQUE0QztBQUM1Qyw4REFBOEQ7QUFDOUQsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCwrQ0FBK0M7QUFFL0MsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFFM0MsMkNBQTJDO0FBQzNDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFFM0MsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUMsd0NBQXdDO0FBQ3hDLGVBQWU7QUFDZixTQUFTO0FBQ1QscURBQXFEO0FBQ3JELEtBQUs7QUFFTCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtJQUNuQixHQUFHLENBQUMsSUFBSSxHQUFHLHlCQUF5QjtBQUN4QyxDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNOzs7Ozs7O0FDOUNyQixtQzs7Ozs7Ozs7Ozs7O0FDQUEsNkRBQWdDO0FBQ2hDLHlEQUE0QjtBQUM1QixvREFBNkU7QUFFN0UsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFNUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBTSxDQUFDO0lBQ3RCLE1BQU0sRUFBRSxLQUFLO0NBQ2hCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQy9CLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxJQUFJLDZCQUE2QixHQUFHO1FBQ2hDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFO1FBQzNELHlCQUF5QixFQUFFLGtCQUFrQixDQUFDLHlCQUF5QixFQUFFO1FBQ3pFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUztRQUNqRCxTQUFTLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFNBQVM7UUFDakQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxLQUFLO1FBQ3pDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUMvQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxFQUFFO0tBQ3BEO0lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0QsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQzdCLDZCQUE2QixDQUNoQztBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsbUNBQW1DO0FBQ2xELENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU07Ozs7Ozs7Ozs7QUMvQnJCLDBDQUFvQztBQVVwQyxNQUFNLGtCQUFtQixTQUFRLGlCQUFPO0lBRXBDLFlBQVksR0FBUTtRQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFZO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtTQUNsQztJQUNMLENBQUM7Q0FDSjtBQUVRLGdEQUFrQjs7Ozs7Ozs7OztBQ3RDM0IsNENBQXFEO0FBRXJELE1BQU0sT0FBTztJQUtULFlBQVksT0FBWSxFQUFFLFFBQWE7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFEOztXQUVHO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO0lBQ3hFLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNyRCxDQUFDO0lBR0QsYUFBYTtRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM5QyxPQUFPLElBQUk7U0FDZDtRQUNELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxrQkFBa0I7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMs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aUI7WUFDM0IsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO0NBQ0wiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgS29hIGZyb20gXCJrb2FcIjtcbmltcG9ydCBsb2c0anMgZnJvbSBcImxvZzRqc1wiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInO1xuXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IGNoZWNrSGVhbHRoUm91dGVyIGZyb20gXCIuL2NoZWNrSGVhbHRoXCJcbmltcG9ydCB7IERhdGFUcmFuc2Zlck9iamVjdCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0RhdGFUcmFuc2Zlck9iamVjdFwiO1xuXG5pbXBvcnQgc2VydmVyIGZyb20gXCIuLi9jb25maWcvU2VydmVyc1wiO1xuXG5pbXBvcnQgeyBEZWJ1Z3MgfSBmcm9tIFwiLi9sb2FkZXJzL0RlYnVnXCI7XG5pbXBvcnQgeyBMb2dnZXJzIH0gZnJvbSBcIi4vbG9hZGVycy9Mb2dnZXJcIjtcbmNvbnN0IHsgcG9ydCB9ID0gc2VydmVyO1xuXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5jb25zdCBsb2dnZXJzID0gbmV3IExvZ2dlcnMoKVxubG9nZ2Vycy5jb25maWd1cmF0aW9uKCk7XG5cbmFwcC51c2UoYm9keVBhcnNlcigpKVxuXG5hcHBcbiAgICAudXNlKGNoZWNrSGVhbHRoUm91dGVyLnJvdXRlcygpKVxuICAgIC51c2UoY2hlY2tIZWFsdGhSb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSlcbiAgICAudXNlKHJvdXRlci5yb3V0ZXMoKSlcbiAgICAudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKVxuXG5hcHAudXNlKGFzeW5jIGN0eCA9PiB7XG4gICAgY29uc3QgZGF0YVRyYW5zZmVyT2JqZWN0ID0gbmV3IERhdGFUcmFuc2Zlck9iamVjdChjdHgpO1xuICAgIGNvbnN0IF9yZXN1bHRzID0ge1xuICAgICAgICBwYXJzZXI6IGF3YWl0IGRhdGFUcmFuc2Zlck9iamVjdC5nZXRVc2VyQWdlbnRQYXJzZXIoKSxcbiAgICAgICAgc2VwaG9yYVBhcnNlcjogYXdhaXQgZGF0YVRyYW5zZmVyT2JqZWN0LmdldFNlcGhvcmFVc2VyQWdlbnRQYXJzZXIoKVxuICAgIH1cbiAgICBjdHguc3RhdHVzID0gNDA0O1xuICAgIGN0eC5ib2R5ID0gX3Jlc3VsdHNcbn0pXG5cbmFwcC5vbignZXJyb3InLCAoZXJyOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdzZXJ2ZXIgZXJyb3InLCBlcnIpXG59KTtcblxuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwLmNhbGxiYWNrKCkpLmxpc3Rlbihwb3J0KVxuXG4vLyBhcHAubGlzdGVuKEVudmlyb25tZW50LnBvcnQpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1ib2R5cGFyc2VyXCIpOyIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgdjEgZnJvbSBcIi4vdjFcIjtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcih7XG4gICAgcHJlZml4OiAnL2FwaSdcbn0pO1xuXG5yb3V0ZXIudXNlKHYxLnJvdXRlcygpLCB2MS5hbGxvd2VkTWV0aG9kcygpKVxuXG5yb3V0ZXIuYWxsKCcvKicsIGN0eCA9PiB7XG4gICAgY3R4LmJvZHkgPSBcImRlZmF1bHQgb2JsaWdhdGUgYXBpXCJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IGxvZzRqcyBmcm9tIFwibG9nNGpzXCI7XG5pbXBvcnQgbW9ja2pzIGZyb20gXCJtb2NranNcIjtcbmltcG9ydCB1c2VyYWdlbnQgZnJvbSBcIi4vdXNlcmFnZW50XCI7XG5cbmNvbnN0IEdlbmVyaWMgPSBsb2c0anMuZ2V0TG9nZ2VyKCdHZW5lcmljJyk7XG5jb25zdCBBcGkgPSBsb2c0anMuZ2V0TG9nZ2VyKCdBcGknKTtcbmNvbnN0IENwdSA9IGxvZzRqcy5nZXRMb2dnZXIoJ0NwdScpO1xuY29uc3QgTWVtb3J5ID0gbG9nNGpzLmdldExvZ2dlcignTWVtb3J5Jyk7XG5cbmltcG9ydCB7IERhdGFUcmFuc2Zlck9iamVjdCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9EYXRhVHJhbnNmZXJPYmplY3RcIjtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcih7XG4gICAgcHJlZml4OiAnL3YxJ1xufSk7XG5cblxucm91dGVyLnVzZSh1c2VyYWdlbnQucm91dGVzKCksIHVzZXJhZ2VudC5hbGxvd2VkTWV0aG9kcygpKVxuXG4vLyByb3V0ZXIuZ2V0KCcvZHRvJywgYXN5bmMgKGN0eCwgbmV4dCkgPT4ge1xuLy8gICAgIGNvbnN0IGRhdGFUcmFuc2Zlck9iamVjdCA9IG5ldyBEYXRhVHJhbnNmZXJPYmplY3QoY3R4KTtcbi8vICAgICBHZW5lcmljLmluZm8obW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG4vLyAgICAgR2VuZXJpYy5lcnJvcihtb2NranMuUmFuZG9tLnBhcmFncmFwaCgxKSlcbi8vICAgICBHZW5lcmljLndhcm4obW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG5cbi8vICAgICBBcGkuaW5mbyhtb2NranMuUmFuZG9tLnBhcmFncmFwaCgxKSlcbi8vICAgICBBcGkuZXJyb3IobW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG4vLyAgICAgQXBpLndhcm4obW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG5cbi8vICAgICBDcHUuaW5mbyhtb2NranMuUmFuZG9tLnBhcmFncmFwaCgxKSlcbi8vICAgICBDcHUuZXJyb3IobW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG4vLyAgICAgQ3B1Lndhcm4obW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG5cbi8vICAgICBNZW1vcnkuaW5mbyhtb2NranMuUmFuZG9tLnBhcmFncmFwaCgxKSlcbi8vICAgICBNZW1vcnkuZXJyb3IobW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG4vLyAgICAgTWVtb3J5Lndhcm4obW9ja2pzLlJhbmRvbS5wYXJhZ3JhcGgoMSkpXG4vLyAgICAgcmV0dXJuIGRhdGFUcmFuc2Zlck9iamVjdC5lcnJvcih7XG4vLyAgICAgICAgIGM6IDFcbi8vICAgICB9KVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGFUcmFuc2Zlck9iamVjdC5nZXRVc2VySXAoKSlcbi8vIH0pXG5cbnJvdXRlci5hbGwoJy8qJywgY3R4ID0+IHtcbiAgICBjdHguYm9keSA9IFwiZGVmYXVsdCBvYmxpZ2F0ZSBhcGkvdjFcIlxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7IiwiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBsb2c0anMgZnJvbSBcImxvZzRqc1wiO1xuaW1wb3J0IHsgRGF0YVRyYW5zZmVyT2JqZWN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRyb2xsZXJzL0RhdGFUcmFuc2Zlck9iamVjdFwiO1xuXG5jb25zdCBHZW5lcmljID0gbG9nNGpzLmdldExvZ2dlcignR2VuZXJpYycpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKHtcbiAgICBwcmVmaXg6ICcvdWEnXG59KTtcblxucm91dGVyLmdldCgnL2dldFVBJywgKGN0eCwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IGRhdGFUcmFuc2Zlck9iamVjdCA9IG5ldyBEYXRhVHJhbnNmZXJPYmplY3QoY3R4KTtcbiAgICBsZXQgX2RhdGFUcmFuc2Zlck9iamVjdFBtcGxlbWVudHMgPSB7XG4gICAgICAgIGdldFVzZXJBZ2VudFBhcnNlcjogZGF0YVRyYW5zZmVyT2JqZWN0LmdldFVzZXJBZ2VudFBhcnNlcigpLFxuICAgICAgICBnZXRTZXBob3JhVXNlckFnZW50UGFyc2VyOiBkYXRhVHJhbnNmZXJPYmplY3QuZ2V0U2VwaG9yYVVzZXJBZ2VudFBhcnNlcigpLFxuICAgICAgICBpc1NlcGhvcmE6IGRhdGFUcmFuc2Zlck9iamVjdC51c2VyQWdlbnQuaXNTZXBob3JhLFxuICAgICAgICBpc0FuZHJvaWQ6IGRhdGFUcmFuc2Zlck9iamVjdC51c2VyQWdlbnQuaXNBbmRyaW9kLFxuICAgICAgICBpc0lvczogZGF0YVRyYW5zZmVyT2JqZWN0LnVzZXJBZ2VudC5pc0lvcyxcbiAgICAgICAgaXNXZWNoYXQ6IGRhdGFUcmFuc2Zlck9iamVjdC51c2VyQWdlbnQuaXNXZWNoYXQsXG4gICAgICAgIGlzTWluaVByb2dyYW06IGRhdGFUcmFuc2Zlck9iamVjdC5pc01pbmlQcm9ncmFtKClcbiAgICB9XG4gICAgR2VuZXJpYy5pbmZvKEpTT04uc3RyaW5naWZ5KF9kYXRhVHJhbnNmZXJPYmplY3RQbXBsZW1lbnRzKSlcbiAgICByZXR1cm4gZGF0YVRyYW5zZmVyT2JqZWN0LnN1Y2Nlc3MoXG4gICAgICAgIF9kYXRhVHJhbnNmZXJPYmplY3RQbXBsZW1lbnRzXG4gICAgKVxufSlcblxucm91dGVyLmFsbCgnLyonLCBjdHggPT4ge1xuICAgIGN0eC5ib2R5ID0gXCJkZWZhdWx0IG9ibGlnYXRlIGFwaS92MS91c2VyYWdlbnRcIlxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgeyBDb250ZW50IH0gZnJvbSBcIi4vQ29udGVudFwiO1xuXG5pbnRlcmZhY2UgcmVzcG9uc2Uge1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHJlc3VsdHM6IGFueTtcbiAgICBlcnJvckNvZGU6IG51bWJlcjtcbiAgICBlcnJvck1lc3NhZ2U6IGFueTtcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuY2xhc3MgRGF0YVRyYW5zZmVyT2JqZWN0IGV4dGVuZHMgQ29udGVudCB7XG4gICAgY3R4OiBhbnk7XG4gICAgY29uc3RydWN0b3IoY3R4OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoY3R4LnJlcSwgY3R4LnJlcyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3MocmVzdWx0czogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3R4LnN0YXR1cyA9IDIwMDtcbiAgICAgICAgdGhpcy5jdHguYm9keSA9IHtcbiAgICAgICAgICAgIHJlc3VsdHM6IHJlc3VsdHMsXG4gICAgICAgICAgICBlcnJvckNvZGU6IDAsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5zdGF0dXMgPSA0MDQ7XG4gICAgICAgIHRoaXMuY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICByZXN1bHRzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiAxLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgRGF0YVRyYW5zZmVyT2JqZWN0IH0iLCJpbXBvcnQgeyBVc2VyQWdlbnQgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvVXNlckFnZW50XCI7XG5cbmNsYXNzIENvbnRlbnQge1xuICAgIHByaXZhdGUgcmVxdWVzdDogYW55O1xuICAgIHByaXZhdGUgcmVzcG9uc2U6IGFueTtcbiAgICB1c2VyQWdlbnQ6IGFueTtcbiAgICBfcmVmZXJyZXI6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBhbnksIHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdFxuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgdGhpcy51c2VyQWdlbnQgPSBuZXcgVXNlckFnZW50KHRoaXMuaGVhZGVyc1sndXNlci1hZ2VudCddKVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmb3IgaXNNaW5pUHJvZ3JhbXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlZmVycmVyID0gdGhpcy5oZWFkZXJzLnJlZmVycmVyIHx8IHRoaXMuaGVhZGVycy5yZWZlcmVyIHx8IFwiXCJcbiAgICB9XG5cbiAgICBnZXRVc2VySXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHxcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHxcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5zb2NrZXQucmVtb3RlQWRkcmVzcyB8fFxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmNvbm5lY3Rpb24uc29ja2V0LnJlbW90ZUFkZHJlc3M7XG4gICAgfVxuXG5cbiAgICBpc01pbmlQcm9ncmFtKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5yZWZlcnJlci5zZWFyY2goL3BhZ2UtZnJhbWUuaHRtbC8pID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0U2VwaG9yYVVzZXJBZ2VudFBhcnNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckFnZW50LmdldFNlcGhvcmFVc2VyQWdlbnRQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyQWdlbnRQYXJzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJBZ2VudC5nZXRVc2VyQWdlbnRQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgcmVmZXJyZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICAgIH1cblxuICAgIGdldCBoZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IG1ldGhvZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC5tZXRob2Q7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC51cmw7XG4gICAgfVxuXG4gICAgZ2V0IG9yaWdpbmFsVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Lm9yaWdpbmFsVXJsO1xuICAgIH1cblxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmhyZWY7XG4gICAgfVxuXG4gICAgZ2V0IHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QucGF0aDtcbiAgICB9XG5cbiAgICBnZXQgcXVlcnlzdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QucXVlcnlzdHJpbmc7XG4gICAgfVxuXG4gICAgZ2V0IGhvc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QuaG9zdDtcbiAgICB9XG5cbiAgICBnZXQgVVJMKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LlVSTDtcbiAgICB9XG5cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC50eXBlO1xuICAgIH1cblxuICAgIGdldCBjaGFyc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmNoYXJzZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnF1ZXJ5O1xuICAgIH1cblxuICAgIGdldCBmcmVzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC5mcmVzaDtcbiAgICB9XG5cbiAgICBnZXQgc3RhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Quc3RhbGU7XG4gICAgfVxuXG4gICAgZ2V0IHByb3RvY29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnByb3RvY29sO1xuICAgIH1cblxuICAgIGdldCBzZWN1cmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Quc2VjdXJlO1xuICAgIH1cblxuICAgIGdldCBpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC5pcDtcbiAgICB9XG5cbiAgICBnZXQgaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmlwcztcbiAgICB9XG5cbiAgICBnZXQgc3ViZG9tYWlucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdC5zdWJkb21haW5zO1xuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IHsgQ29udGVudCB9IiwiaW1wb3J0IHsgVUFQYXJzZXIgfSBmcm9tICd1YS1wYXJzZXItanMnO1xuXG5pbnRlcmZhY2Ugc2NyZWVuU2l6ZSB7XG4gICAgd2lkdGg6IHN0cmluZztcbiAgICBoZWlnaHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIHNlcGhvcmFVc2VyQWdlbnRSZXNwb25zZSB7XG4gICAgdGFnPzogYm9vbGVhbjtcbiAgICBzY2FsZT86IHN0cmluZyB8IGJvb2xlYW47XG4gICAgc2NyZWVuU2l6ZT86IHNjcmVlblNpemU7XG4gICAgcGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgICBpc1NlcGhvcmE6IGJvb2xlYW47XG4gICAgX2lzQW5kcm9pZD86IGJvb2xlYW47XG4gICAgX2lzSW9zPzogYm9vbGVhbjtcbiAgICBfaXNXZWNoYXQ/OiBib29sZWFuO1xuICAgIF9pc01pbmlQcm9ncmFtPzogYm9vbGVhbjtcbn1cblxuY2xhc3MgVXNlckFnZW50IHtcbiAgICB1YVBhcnNlckpzOiBhbnk7XG4gICAgdXNlcmFnZW50OiBzdHJpbmc7XG4gICAgdXNlcmFnZW50TG93ZXI6IGFueTtcbiAgICBfaXNJb3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBfaXNBbmRyb2lkOiBib29sZWFuID0gZmFsc2U7XG4gICAgX2lzV2VjaGF0OiBib29sZWFuID0gZmFsc2U7XG4gICAgX2lzTWluaVByb2dyYW06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyYWdlbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVzZXJhZ2VudCA9IHVzZXJhZ2VudFxuICAgICAgICB0aGlzLnVzZXJhZ2VudExvd2VyID0gdXNlcmFnZW50LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMudWFQYXJzZXJKcyA9IG5ldyBVQVBhcnNlcih1c2VyYWdlbnQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5faXNJb3MgPSB0aGlzLnVhUGFyc2VySnMuZ2V0T1MoKS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IFwiaW9zXCJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9pc0FuZHJvaWQgPSB0aGlzLnVhUGFyc2VySnMuZ2V0T1MoKS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IFwiYW5kcm9pZFwiXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5faXNXZWNoYXQgPSB0aGlzLnVhUGFyc2VySnMuZ2V0VUEoKS5pbmRleE9mKCdNaWNyb01lc3NlbmdlcicpID4gLTFcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9pc01pbmlQcm9ncmFtID0gdGhpcy51YVBhcnNlckpzLmdldFVBKCkuaW5kZXhPZignbWluaVByb2dyYW0nKSA+IC0xXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cblxuICAgIGdldFVzZXJBZ2VudFBhcnNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWFQYXJzZXJKcy5nZXRSZXN1bHQoKTtcbiAgICB9XG5cbiAgICBnZXRTZXBob3JhVXNlckFnZW50UGFyc2VyKCk6IHNlcGhvcmFVc2VyQWdlbnRSZXNwb25zZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWc6IHRoaXMudGFnLFxuICAgICAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICAgICAgICBzY3JlZW5TaXplOiB0aGlzLnNjcmVlblNpemUsXG4gICAgICAgICAgICBwbGF0Zm9ybTogdGhpcy5wbGF0Zm9ybSxcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgICAgICAgIGlzU2VwaG9yYTogdGhpcy5pc1NlcGhvcmFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc0lvcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW9zO1xuICAgIH1cblxuICAgIGdldCBpc1dlY2hhdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2VjaGF0XG4gICAgfVxuXG4gICAgZ2V0IGlzQW5kcmlvZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQW5kcm9pZDtcbiAgICB9XG5cbiAgICBnZXQgdGFnKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pc1NlcGhvcmEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcmFnZW50TG93ZXIuc2VhcmNoKC9zZXBob3JhXFwvYXBwLykgPiAtMVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGdldCBzY2FsZSgpIHtcbiAgICAgICAgY29uc3QgX3ZhbHVlOiBhbnkgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoX3ZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWUubWF0Y2goLyhzY2FsZVxcLyhbXFxkXFwuXSspKS8pWzJdXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0IHNjcmVlblNpemUoKSB7XG4gICAgICAgIGNvbnN0IF92YWx1ZTogYW55ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKF92YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aCA9IF92YWx1ZS5tYXRjaCgvKHNjcmVlbnNpemVcXC8oW1xcZFxcLnhdKykpLylbMl1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2guc3BsaXQoJ3gnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aC5zcGxpdCgneCcpWzFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgaGVpZ2h0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHBsYXRmb3JtKCkge1xuICAgICAgICBjb25zdCBfdmFsdWU6IGFueSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmIChfdmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZS5tYXRjaCgvKGlwaG9uZXxhbmRyb2lkIHBob25lfGFuZHJvaWQgZWN3YWxsKS8pWzBdXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcGhvcmEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcmFnZW50TG93ZXIubWF0Y2goL1xcKFteKV0qXFwpLylbMF07XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcGhvcmEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcmFnZW50TG93ZXIubWF0Y2goL15zZXBob3JhXFwvKFtcXGRcXC5dKykvKVsxXVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGdldCBpc1NlcGhvcmEoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJhZ2VudC5zZWFyY2goL15TZXBob3JhLykgPiAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFVzZXJBZ2VudCB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidWEtcGFyc2VyLWpzXCIpOyIsImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgeyBIZWFsdGhDaGVja0RhdGFUcmFuc2Zlck9iamVjdCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9IZWFsdGhDaGVja0RhdGFUcmFuc2Zlck9iamVjdFwiO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKHtcbiAgICBwcmVmaXg6ICcvY2hlY2tIZWFsdGgnXG59KTtcblxucm91dGVyLmdldCgnKicsIGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhDaGVja0RhdGFUcmFuc2Zlck9iamVjdCA9IG5ldyBIZWFsdGhDaGVja0RhdGFUcmFuc2Zlck9iamVjdChjdHgpXG4gICAgcmV0dXJuIGF3YWl0IGhlYWx0aENoZWNrRGF0YVRyYW5zZmVyT2JqZWN0LnN1Y2Nlc3MoXCJIZWFsdGgyXCIpXG59KVxuXG5yb3V0ZXIuYWxsKCcvKicsIGN0eCA9PiB7XG4gICAgY3R4LmJvZHkgPSBcImRlZmF1bHQgb2JsaWdhdGUgaGVhbHRoQ2hlY2tcIlxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgeyBEYXRhVHJhbnNmZXJPYmplY3QgfSBmcm9tIFwiLi9EYXRhVHJhbnNmZXJPYmplY3RcIjtcblxuaW50ZXJmYWNlIHJlc3BvbnNlIHtcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICByZXN1bHRzOiBhbnk7XG4gICAgZXJyb3JDb2RlOiBudW1iZXI7XG4gICAgZXJyb3JNZXNzYWdlOiBhbnk7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmNsYXNzIEhlYWx0aENoZWNrRGF0YVRyYW5zZmVyT2JqZWN0IGV4dGVuZHMgRGF0YVRyYW5zZmVyT2JqZWN0IHtcbiAgICBjdHg6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihjdHg6IGFueSkge1xuICAgICAgICBzdXBlcihjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICBzdWNjZXNzKHJlc3VsdHM6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5zdGF0dXMgPSAyMDA7XG4gICAgICAgIHRoaXMuY3R4LmJvZHkgPSByZXN1bHRzXG4gICAgfVxuXG4gICAgZXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5zdGF0dXMgPSA0MDQ7XG4gICAgICAgIHRoaXMuY3R4LmJvZHkgPSBlcnJvclxuICAgIH1cbn1cblxuZXhwb3J0IHsgSGVhbHRoQ2hlY2tEYXRhVHJhbnNmZXJPYmplY3QgfSIsImltcG9ydCBkZXZlbG9wbWVudCBmcm9tIFwiLi9kZXZlbG9wbWVudFwiO1xuaW1wb3J0IHByb2R1Y3Rpb24gZnJvbSBcIi4vcHJvZHVjdGlvblwiO1xuXG5pbXBvcnQgZW52IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuXG4vLyBjb25zdCBFbnZpcm9ubWVudCA9IGlzUHJvZCA/IHByb2R1Y3Rpb24gOiBkZXZlbG9wbWVudDtcblxubGV0IEVudmlyb25tZW50ID0gZW52ID8gcHJvZHVjdGlvbiA6IGRldmVsb3BtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaWRlbnRpdHk6IFwiZGV2ZWxvcG1lbnRcIixcbiAgICBwb3J0OiA0MDAwXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkZW50aXR5OiBcInByb2R1Y3Rpb25cIixcbiAgICBwb3J0OiA0MDAxXG59IiwibGV0IGVudmlyb25tZW50OiBib29sZWFuID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5cbi8vIGNvbnN0IEVudmlyb25tZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuLy8gZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQiLCJpbXBvcnQgbG9nNGpzIGZyb20gJ2xvZzRqcyc7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcIi4uLy4uL2NvbmZpZy9Mb2dnZXJzXCI7XG5cbmludGVyZmFjZSBMb2dnZXJTZXR0aW5nIHtcbiAgICBwYXR0ZXJuOiBzdHJpbmc7XG4gICAgbWF4TG9nU2l6ZTogbnVtYmVyO1xuICAgIGFsd2F5c0luY2x1ZGVQYXR0ZXJuOiBib29sZWFuO1xuICAgIGRheXNUb0tlZXA6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExvZ2dlciB7XG4gICAgc2V0dGluZzogTG9nZ2VyU2V0dGluZztcbn1cblxuY2xhc3MgTG9nZ2VycyBpbXBsZW1lbnRzIExvZ2dlciB7XG4gICAgc2V0dGluZyA9IHtcbiAgICAgICAgcGF0dGVybjogXCIueXl5eS1NTS1kZC5sb2dcIixcbiAgICAgICAgbWF4TG9nU2l6ZTogMjA5NzE1MjAwLFxuICAgICAgICBhbHdheXNJbmNsdWRlUGF0dGVybjogdHJ1ZSxcbiAgICAgICAgZGF5c1RvS2VlcDogMTQsXG4gICAgICAgIGJhY2t1cHM6IDIwLFxuICAgICAgICBlbmNvZGluZzogJ3V0Zi04JyxcbiAgICAgICAgdHlwZTogJ2RhdGVGaWxlJ1xuICAgIH07XG4gICAgY29uZmlnOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gRW52aXJvbm1lbnQ7XG4gICAgfVxuXG5cbiAgICBnZXQgZ2V0X2FwcGVuZGVycygpIHtcbiAgICAgICAgbGV0IGFwcGVuZGVyczogYW55ID0ge307XG4gICAgICAgIHRoaXMuY29uZmlnLmFwcGVuZGVycy5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgYXBwZW5kZXJzW2RhdGFbJ25hbWUnXV0gPSB7XG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGRhdGEuZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zZXR0aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhcHBlbmRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IGdldF9jYXRlZ29yaWVzKCkge1xuXG4gICAgICAgIGxldCBjYXRlZ29yaWVzOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IGxldmVsOiBzdHJpbmcgPSAnQUxMJ1xuICAgICAgICAvLyBsZXQgZGVmYXVsdDogYW55O1xuXG4gICAgICAgIHRoaXMuY29uZmlnLmFwcGVuZGVycy5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcmllc1tkYXRhWyduYW1lJ11dID0ge1xuICAgICAgICAgICAgICAgIGFwcGVuZGVyczogW2RhdGEubmFtZV0sXG4gICAgICAgICAgICAgICAgbGV2ZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgYXBwZW5kZXJzOiBbJ0dlbmVyaWMnXSwgbGV2ZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG5cbiAgICAgICAgbG9nNGpzLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBhcHBlbmRlcnM6IHRoaXMuZ2V0X2FwcGVuZGVycyxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMuZ2V0X2NhdGVnb3JpZXMsXG4gICAgICAgICAgICBwbTI6IHRydWUsXG4gICAgICAgICAgICBwbTJJbnN0YW5jZVZhcjogXCJJTlNUQU5DRV9JRFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgTG9nZ2VycyB9IiwiaW1wb3J0IGRldmVsb3BtZW50IGZyb20gXCIuL2RldmVsb3BtZW50XCI7XG5pbXBvcnQgcHJvZHVjdGlvbiBmcm9tIFwiLi9wcm9kdWN0aW9uXCI7XG5cbmltcG9ydCBlbnYgZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5cbi8vIGNvbnN0IEVudmlyb25tZW50ID0gaXNQcm9kID8gcHJvZHVjdGlvbiA6IGRldmVsb3BtZW50O1xuXG5sZXQgRW52aXJvbm1lbnQgPSBlbnYgPyBwcm9kdWN0aW9uIDogZGV2ZWxvcG1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhcHBlbmRlcnM6IFt7XG4gICAgICAgIG5hbWU6IFwiR2VuZXJpY1wiLFxuICAgICAgICBmaWxlbmFtZTogJ2xvZ3MvR2VuZXJpYy5sb2cnLFxuICAgICAgICBsZXZlbDogXCJBTExcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJBcGlcIixcbiAgICAgICAgZmlsZW5hbWU6ICdsb2dzL0FwaS5sb2cnLFxuICAgICAgICBsZXZlbDogXCJBTExcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJSZWRpc1wiLFxuICAgICAgICBmaWxlbmFtZTogJ2xvZ3MvUmVkaXMubG9nJyxcbiAgICAgICAgbGV2ZWw6IFwiQUxMXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiQ3B1XCIsXG4gICAgICAgIGZpbGVuYW1lOiAnbG9ncy9DcHUubG9nJyxcbiAgICAgICAgbGV2ZWw6IFwiQUxMXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiTWVtb3J5XCIsXG4gICAgICAgIGZpbGVuYW1lOiAnbG9ncy9NZW1vcnkubG9nJyxcbiAgICAgICAgbGV2ZWw6IFwiQUxMXCJcbiAgICB9XVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYXBwZW5kZXJzOiBbe1xuICAgICAgICBuYW1lOiBcIkdlbmVyaWNcIixcbiAgICAgICAgZmlsZW5hbWU6ICdsb2dzL0dlbmVyaWMubG9nJyxcbiAgICAgICAgbGV2ZWw6IFwiQUxMXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiQXBpXCIsXG4gICAgICAgIGZpbGVuYW1lOiAnbG9ncy9BcGkubG9nJyxcbiAgICAgICAgbGV2ZWw6IFwiQUxMXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiUmVkaXNcIixcbiAgICAgICAgZmlsZW5hbWU6ICdsb2dzL1JlZGlzLmxvZycsXG4gICAgICAgIGxldmVsOiBcIkFMTFwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkNwdVwiLFxuICAgICAgICBmaWxlbmFtZTogJ2xvZ3MvQ3B1LmxvZycsXG4gICAgICAgIGxldmVsOiBcIkFMTFwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIk1lbW9yeVwiLFxuICAgICAgICBmaWxlbmFtZTogJ2xvZ3MvTWVtb3J5LmxvZycsXG4gICAgICAgIGxldmVsOiBcIkFMTFwiXG4gICAgfV1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==