const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack/webpack.development.config');
const compiler = webpack(webpackConfig);

import { Pages } from './';


module.exports = function development(app) {
    app.use(WebpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        stats: { colors: true }
    }));
    app.use(WebpackHotMiddleware(compiler));

    app.get('*', function (req, res) {
        res.type('html').send(Pages.hmr({
            'Env': {
                'Env': JSON.parse(app.get('soa_total')),
            }
        }))
    })
}

        // if (app.get('soa_env') === 'hmr') {
        //     return res.type('html').send(hmr({
                // 'Env': {
                //     'Env': JSON.parse(app.get('soa_total')),
                // },
        //     }))
        // }


        // if( app.get('soa_env') )
        // console.log( app.get('soa_env') )

        // match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
        //     if (error) {
        //         res.status(500).send(error.message);
        //     } else if (redirectLocation) {
        //         res.redirectLocation(redirectLocation.pathname + redirectLocation.search);
        //     } else if (renderProps) {

        //         GetCookie({ "Cookie": req.headers.cookie })
        //             .then(cookies => GetRouterIndex({
        //                 UID: cookies.UID,
        //                 Token: cookies.Token,
        //                 Env: JSON.parse(app.get('soa_total')),
        //                 timeout: 3000,
        //                 Location: renderProps.location
        //             }))
        //             .then(index => GetSyncList(index))
        //             .then(list => GetSyncFetch(list))
        //             .then(response => {
        //                 response.fetchResponse['seo'] = configTDK.seo;

        //                 for (let i in response.fetchResponse) {
        //                     preLoadedState[i] = {};
        //                     preLoadedState[i].results = response.fetchResponse[i].results;
        //                     preLoadedState[i].metadata = response.fetchResponse[i].metadata;
        //                     preLoadedState[i].message = response.fetchResponse[i].message || [i] + " Success";
        //                 }

        //                 store = configureStore(preLoadedState);

        //                 // const html = renderToString(
        //                 //     <Provider store={store}>
        //                 //         <RouterContext {...renderProps} />
        //                 //     </Provider>
        //                 // );

        //                 res.type('html').send(develop({
        //                     "STORE": store.getState(),
        //                     "Env": response.Env
        //                 }));
        //             })
        //             .catch(err => console.log(err));
            // }
        // });
    // });
// };