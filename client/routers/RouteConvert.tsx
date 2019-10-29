import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import { TUseRouteMatch } from "../types/Route";

import Convert from "../containers/Convert/index";
import ConvertImage from "../containers/Convert/ConvertImage";

function RouterConvert() {

    let { path }: TUseRouteMatch = useRouteMatch() || {};

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path}>
                    <Convert />
                </Route>
                <Route path={`${path}/images`}>
                    <ConvertImage />
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(RouterConvert);