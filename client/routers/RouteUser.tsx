import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import Login from "../containers/User/Login";

import { TUseRouteMatch } from "../types/Route";

function RouteUser() {

    let { path }: TUseRouteMatch = useRouteMatch() || {};

    return (
        <div>
            <Switch>
                <Route path={`${path}/login`}>
                    <Login />
                </Route>
                <Redirect from="*" to={`${path}/login`}></Redirect>
            </Switch>
        </div>
    );
}

export default withRouter(RouteUser);