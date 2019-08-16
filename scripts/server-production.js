const path = require('path');
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../common/routes';
import configureStore from '../common/store/configureStore';

import { Pages } from './';

const Hash = require('../etc/template/hash.json');
const Style = require('../etc/template/style.json');

let preLoadedState = {};
let store = {};

module.exports = function production(app) {
    app.get('*', (req, res) => {

        match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirectLocation(redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {


                store = configureStore(preLoadedState);

                const html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );

                res.type('html').send(Pages.product({
                    "HTML": html,
                    "STORE": store.getState(),
                    "HASH": Hash,
                    "STYLE": Style,
                    'Env': {
                        'Env': JSON.parse(app.get('soa_total')),
                    }
                }));


            }
        });
    });
};