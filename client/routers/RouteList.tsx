import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import TableList from "../containers/List/TableList";

import { TUseRouteMatch } from "../types/Route";

function RouteList() {

    let { path }: TUseRouteMatch = useRouteMatch() || {};

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path}>
                    <TableList />
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(RouteList);