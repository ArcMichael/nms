import chalk from "chalk";
const log = console.log;

interface Debug {
    log(s: string, o?: any): void;
    error(s: string, o?: any): void;
    warn(s: string, o?: any): void;
}

class Debugs implements Debug {
    log(s: string, o?: any) {
        log(chalk.bold.blue(s))
    }
    error(s: string, o?: any) {
        log(chalk.bold.red(s))
    }
    warn(s: string, o?: any) {
        log(chalk.bold.yellow(s))
    }
}

export { Debugs }