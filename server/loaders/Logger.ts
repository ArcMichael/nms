import log4js from 'log4js';
import Environment from "../../config/Loggers";

interface LoggerSetting {
    pattern: string;
    maxLogSize: number;
    alwaysIncludePattern: boolean;
    daysToKeep: number;
}

interface Logger {
    setting: LoggerSetting;
}

class Loggers implements Logger {
    setting = {
        pattern: ".yyyy-MM-dd.log",
        maxLogSize: 209715200,
        alwaysIncludePattern: true,
        daysToKeep: 14,
        backups: 20,
        encoding: 'utf-8',
        type: 'dateFile'
    };
    config: any;
    constructor() {
        this.config = Environment;
    }


    get get_appenders() {
        let appenders: any = {};
        this.config.appenders.map((data: any, index: number) => {
            appenders[data['name']] = {
                filename: data.filename,
                ...this.setting
            }
        })
        return appenders;
    }

    get get_categories() {

        let categories: any = {};
        let level: string = 'ALL'
        // let default: any;

        this.config.appenders.map((data: any, index: number) => {
            categories[data['name']] = {
                appenders: [data.name],
                level
            }
        })
        return {
            ...categories,
            default: {
                appenders: ['Generic'], level
            }
        }
    }

    configuration(): void {

        log4js.configure({
            appenders: this.get_appenders,
            categories: this.get_categories,
            pm2: true,
            pm2InstanceVar: "INSTANCE_ID"
        });
    }
}

export { Loggers }