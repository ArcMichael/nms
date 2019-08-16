require('es6-promise').polyfill();
import 'isomorphic-fetch';

module.exports = function getSyncFetch(parameter) {
    return new Promise((resolve, reject) => {
        let
            Fetches = [],
            FetchRel = [],
            TotalStatus = true,
            FetchList = parameter.fetchList,
            Env = parameter.Env;


        if (FetchList.length === 0) {
            resolve({
                "Env": Env,
                "fetchResponse": FetchRel,
                "fetchList": Fetches,
                "fetchStatus": TotalStatus,
                "fetchError": "len=0"
            });
        }

        FetchList.map((data, index) => {
            // 整合资源
            Fetches[index] = {};

            Fetches[index]["U"] = data.url;
            Fetches[index]["P"] = data.params;
            Fetches[index]["C"] = data.content;

            if (!Fetches[index]["P"]["headers"]) {
                Fetches[index]["P"]["headers"] = {};
            }
            Fetches[index]["P"]["headers"]["Content-Type"] = "application/json";
        });

        let
            TotalFetchLength = Fetches.length,
            TotalFetch = [];

        function verifyFetch(FetchName) {
            TotalFetch.push(FetchName);
            // 判断数据是全部获取
            if (TotalFetchLength === TotalFetch.length) {
                let Errors = {};
                for (let i in TotalFetch) {
                    // timeout
                    if (FetchRel[TotalFetch[i]].results === null) {
                        TotalStatus = false;
                        Errors[TotalFetch[i]] = FetchRel[TotalFetch[i]].message;
                    }
                }
                resolve({
                    "Env": Env,
                    "fetchResponse": FetchRel,
                    "fetchList": Fetches,
                    "fetchStatus": TotalStatus,
                    "fetchError": JSON.stringify(Errors)
                });
            }
        }

        Promise.all(Fetches.map(F =>
            fetch(F.U, F.P)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) { return Promise.resolve(response); }
                    else { return Promise.reject(new Error(response.statusText)); }
                })
                .then(json => json.json())
                .then(function (data) {
                    if (data.status > 0) { FetchRel[F.C] = fetchConfigurationCatch(F.C, "errorCode " + data.status); }
                    else if (data.errorCode) { FetchRel[F.C] = fetchConfigurationCatch(F.C, "errorCode " + JSON.stringify(data)); }
                    else { FetchRel[F.C] = data; }

                    verifyFetch(F.C);
                })
                .catch(error => {
                    if (error === "SyntaxError: Unexpected token <") {
                        // FORMAT ! JSON
                        FetchRel[F.C] = fetchConfigurationCatch(F.C, error);
                    } else if (error.type) {
                        switch (error.type) {
                            // FETCH TIMEOUT
                            case "request-timeout": FetchRel[F.C] = fetchConfigurationCatch(F.C, error.type); break;
                            // FETCH SYSTEM
                            case "system": FetchRel[F.C] = fetchConfigurationCatch(F.C, error.type); break;
                        }
                    } else {
                        // SYSTEM ERROR
                        FetchRel[F.C] = fetchConfigurationCatch(F.C, error);
                    }
                    verifyFetch(F.C);
                })
        ));
    });
};

export function fetchConfigurationCatch(key, error) {
    /**
     * @type "错误信息处理"
     * prototype: "初始化",
     * seo: "SEO初始化"
     */
    let rel;
    switch (key) {
        case "seo":
            rel = {
                "status": 0,
                "message": key + " " + error,
                "results": { "title": "SEPHORA丝芙兰国际化妆品购物网站-丝芙兰官网！", "description": "SEPHORA丝芙兰化妆品购物网站-法国路威酩轩（LVMH）旗下品牌，为您提供国际知名化妆品、护肤品、彩妆、香水等美容用品，购买正品化妆品，就上丝芙兰化妆品网站，官方授权、无障碍退货！", "keywords": "化妆品,化妆品购物网站,SEPHORA丝芙兰官网" }
            };
            break;
        case "user":
            rel = {
                "status": 0,
                "message": key + " " + error,
                "results": { "userType": "", "email": "", "logonId": "", "cardType": "G" }
            };
            break;
        default:
            rel = {
                "status": 0,
                "message": key + " " + error,
                "results": null
            };
            break;
    }
    return rel;
}