import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import Exception403 from "../containers/Exception403";
import Exception404 from "../containers/Exception404";
import Exception500 from "../containers/Exception500";

type IuseRouteMatch = {
    isExact?: boolean;
    params?: object;
    path?: string;
    url?: string;
}

function RouterException() {

    let { path }: IuseRouteMatch = useRouteMatch() || {};

    return (
        <div>
            <Switch>
                <Route exact path={path}>
                    <Exception404 />
                </Route>
                <Route path={`${path}/403`}>
                    <Exception403 />
                </Route>
                <Route path={`${path}/404`}>
                    <Exception404 />
                </Route>
                <Route path={`${path}/500`}>
                    <Exception500 />
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </div>
    );
}

export default withRouter(RouterException);