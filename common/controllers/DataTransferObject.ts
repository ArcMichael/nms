import { Content } from "./Content";

interface response {
    status: number;
    results: any;
    errorCode: number;
    errorMessage: any;
    timestamp: number;
}

class DataTransferObject extends Content {
    ctx: any;
    constructor(ctx: any) {
        super(ctx.req, ctx.res);
        this.ctx = ctx;
    }

    AuthorizedGhostInfo(){
        return {
            xforwardfor: this.getUserIp(),
            referrer: this.referrer,
            headers: this.headers,
            method: this.method,
            url: this.url,
            originalUrl: this.originalUrl,
            href: this.href,
            path: this.path,
            querystring:this.querystring,
            host:this.host,
            URL:this.URL,
            type:this.type,
            charset:this.charset,
            query:this.query,
            fresh:this.fresh,
            stale:this.stale,
            protocol:this.protocol,
            secure:this.secure,
            ip:this.ip,
            ips:this.ips,
            subdomains:this.subdomains,
        }
    }

    authorized(results: any): void {
        this.ctx.status = 401;
        this.ctx.body = {
            results: results,
            errorCode: 0,
            errorMessage: '',
            timestamp: new Date().getTime()
        }
    }

    success(results: any, authorization?: string | Boolean): void {
        this.ctx.status = 200;
        if (authorization) {
            this.ctx.cookies.set("authorization", `Bearer ${authorization}`)
        } else {
            this.ctx.cookies.set("authorization", ``, { signed: false, maxAge: 0 })
        }
        this.ctx.body = {
            results: results,
            errorCode: 0,
            errorMessage: '',
            timestamp: new Date().getTime()
        }
    }

    error(error: any): void {
        this.ctx.status = 404;
        this.ctx.body = {
            results: null,
            errorCode: 1,
            errorMessage: error,
            timestamp: new Date().getTime()
        }
    }
}

export { DataTransferObject }