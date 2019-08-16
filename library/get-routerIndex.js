import configRouter from "../etc/configRouter.js";

module.exports = function getRouterIndex(params) {

    return new Promise((resolve, reject) => {
        let MatchExpr = configRouter();
        for (let i in MatchExpr) {

            if (params.Location.pathname.match(MatchExpr[i]["regex"])) {
                params.index = MatchExpr[i]["index"];
            }
        }

        resolve(params);

    });

};