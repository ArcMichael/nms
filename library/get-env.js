module.exports = function getEnv(title, values, protocol) {
    switch (title) {
        case "node":
            if (protocol === 'https') {
                return JSON.parse(process.env.GlobalEnv)[values].replace('http', 'https');
            } else {
                return JSON.parse(process.env.GlobalEnv)[values];
            }
        case "browser":
            if (protocol === 'https') {
                return window.__INITIAL_ENV__[values].replace('http', 'https');
            } else {
                return window.__INITIAL_ENV__[values];
            }
        default:
            return false;

    }
};