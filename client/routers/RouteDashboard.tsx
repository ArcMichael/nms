import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import { TUseRouteMatch } from "../types/Route";

import Dashboard from "../containers/Dashboard/index";

function RouterDashboard() {

    let { path }: TUseRouteMatch = useRouteMatch() || {};

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path}>
                    <Dashboard />
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(RouterDashboard);