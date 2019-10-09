import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router } from "react-router";
import { Route, BrowserRouter } from "react-router-dom";
import Routes from "./routers"
import { syncHistoryWithStore } from "react-router-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);