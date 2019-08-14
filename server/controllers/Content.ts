import { UserAgent } from "../controllers/UserAgent";

class Content {
    private request: any;
    private response: any;
    userAgent: any;
    _referrer: string;
    constructor(request: any, response: any) {
        this.request = request
        this.response = response
        this.userAgent = new UserAgent(this.headers['user-agent'])

        /**
         * for isMiniPrograms
         */
        this._referrer = this.headers.referrer || this.headers.referer || ""
    
    }

    getUserIp() {
        return this.request.headers['x-forwarded-for'] ||
            this.request.connection.remoteAddress ||
            this.request.socket.remoteAddress ||
            this.request.connection.socket.remoteAddress;
    }


    isMiniProgram(): boolean {
        if (this.referrer.search(/page-frame.html/) > -1) {
            return true
        }
        return false
    }

    getSephoraUserAgentParser() {
        return this.userAgent.getSephoraUserAgentParser();
    }

    getUserAgentParser() {
        return this.userAgent.getUserAgentParser();
    }

    get referrer(): string {
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

export { Content }