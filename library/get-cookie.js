import { GetSingleCookie } from "./index";

module.exports = function getCookie(params) {

    // return new Promise(( resolve, reject ) => {
    //     if( !params ) reject( { Error: "!params" } )

    //     resolve( {
    //         UID: GetSingleCookie( params.Cookie, "UID" ) || null , 
    //         Token: GetSingleCookie( params.Cookie, "Token" ) || null
    //     } )
    // })

    // return 

    return new Promise((resolve, reject) => {
        // basic return
        let relCookieId = null;
        let relCookieToken = null;

        if (!params.Cookie) {
            resolve({ UID: relCookieId, Token: relCookieToken });
        }

        if (GetSingleCookie(params.Cookie, "UID")) {
            relCookieId = GetSingleCookie(params.Cookie, 'UID');
        }

        if (GetSingleCookie(params.Cookie, "Token")) {
            relCookieToken = GetSingleCookie(params.Cookie, 'Token');
        }

        resolve({ UID: relCookieId, Token: relCookieToken });
    });
};