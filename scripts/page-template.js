export function hmr(parameters) {
    return `
        <!doctype html public="HMR">
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <link type="image/x-icon" href="https://ssl1.sephorastatic.cn/wcsfrontend/members/common/favicon.ico" rel="shortcut icon">
        <title>MPM-hot-hmr</title>
    </head>
    </body>
        <div id=root></div>
        <script>
            window.__INITIAL_ENV__ = ${JSON.stringify(parameters.Env)}
        </script>
        <script src="/CDN/jquery/2.1.4/jquery.min.js"></script>
        <script src="/CDN/react/16.8.3/react.development.js"></script>
        <script src="/CDN/react_dom/16.8.3/react-dom.development.js"></script>
        <script src="/CDN/react_router/3.2.1/umd/ReactRouter.js"></script>
        <script src="/CDN/moment.js"></script>
        <script src="/CDN/jquery.cookie.js"></script>
        <script src="/dist/bundle.js"></script>
    </body>
    </html>
    `;
}

export function develop(parameters) {
    return `
        <!doctype html public="DEV">
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <link type="image/x-icon" href="https://ssl1.sephorastatic.cn/wcsfrontend/members/common/favicon.ico" rel="shortcut icon">
        <title>MPM-hot-dev</title>
    </head>
    </body>
        <div id=root></div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(parameters.STORE)};
            window.__INITIAL_ENV__ = ${JSON.stringify(parameters.Env)}
        </script>
        <script src="/CDN/jquery/2.1.4/jquery.min.js"></script>
        <script src="/CDN/react/16.8.3/react.development.js"></script>
        <script src="/CDN/react_dom/16.8.3/react-dom.development.js"></script>
        <script src="/CDN/react_router/3.2.1/umd/ReactRouter.js"></script>
        <script src="/CDN/moment.js"></script>
        <script src="/CDN/jquery.cookie.js"></script>
        <script src="/dist/bundle.js"></script>
    </body>
    </html>
    `;
}

export function product(parameters) {
    let style = `<link rel="stylesheet" href=${parameters.STYLE.index.css} type="text/css" />`;
    return `
        <!doctype html public="PRO">
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <link type="image/x-icon" href="https://ssl1.sephorastatic.cn/wcsfrontend/members/common/favicon.ico" rel="shortcut icon">
        ${ style}
    </head>
    </body>
        <div id=root>${ parameters.HTML}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(parameters.STORE)};
            window.__INITIAL_ENV__ = ${JSON.stringify(parameters.Env)}
        </script>
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/jquery/1.9.1/jquery.min.js"></script>
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/react/16.8.3/react.production.min.js"></script>
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/react_dom/16.8.3/react-dom.production.min.js"></script>
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/react_router/3.2.1/umd/ReactRouter.min.js"></script>
        
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/moment/2.15.2/moment.min.js"></script>
        <script src="https://ssl1.sephorastatic.cn/soa/public/js/jquery_cookie/1.4.1/jquery.cookie.min.js"></script>
        <script src=${ parameters.HASH.vendor.js || ""}></script>
        <script src=${ parameters.HASH.main.js || ""}></script>
       
       

    </body>
    </html>
    `;
}