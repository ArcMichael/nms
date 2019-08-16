import React from "react";
import { Route, IndexRoute } from "react-router";

import Error from "./containers/Error";
import Home from "./containers/Home";

export default (
  <Route>
    {/* <Route path="/login.html" component={Login} /> */}    
    <Route path="/" component={Home} />
    <Route path="*" component={Error} />
  </Route>
);
