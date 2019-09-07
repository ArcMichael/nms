import { DataTransferObject } from "./DataTransferObject";

interface response {
    status: number;
    results: any;
    errorCode: number;
    errorMessage: any;
    timestamp: number;
}

class HealthCheckDataTransferObject extends DataTransferObject {
    ctx: any;
    constructor(ctx: any) {
        super(ctx);
        this.ctx = ctx;
    }

    success(results: any): void {
        this.ctx.status = 200;
        this.ctx.body = results
    }

    error(error: any): void {
        this.ctx.status = 404;
        this.ctx.body = error
    }
}

export { HealthCheckDataTransferObject }