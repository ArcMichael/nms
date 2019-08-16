module.exports = function getSyncList(params) {


    let fetchList = [];

    return new Promise((resolve, reject) => {
        switch (params.index) {
            case "Index":
                break;
            default:
                break;
        }
        resolve({ Env: params, fetchList: fetchList });
    });
};