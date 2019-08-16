import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { AppContainer } from "react-hot-loader";
import configureStore from "./store/configureStore";
import Routers from "./routes";
import { LocaleProvider } from "antd";
import moment from "moment";

// 推荐在入口文件全局设置 locale
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);
const root = document.getElementById("root");
if (window) {
  require("../public/style/index.scss");
}

let RouterKey = 0;
const render = () => {
  let provider = (
    <Provider store={store}>
      <Router key={RouterKey} history={history} routes={Routers} />
    </Provider>
  );

  let AppContainer = null;

  try {
    AppContainer = require("react-hot-loader").AppContainer;
  } catch (e) {
    console.log(e);
  }

  let AppContainers = <AppContainer>{provider}</AppContainer>;

  ReactDOM.render(AppContainer ? AppContainers : provider, root);
};

render();

if (module.hot) {
  console.log("module.hot enabled ");
  module.hot.accept("./routes", () => {
    RouterKey++;
    render();
  });
}
