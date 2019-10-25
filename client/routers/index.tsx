import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect, useParams, useRouteMatch } from "react-router-dom";

import RouteException from "./RouteException";
import RouteUser from "./RouteUser";
import RouteList from "./RouteList";

import "./routers.scss";

type PathParamsType = {}
type Props = RouteComponentProps<PathParamsType> & {}
type States = {}

function Home() {
    return (
        <div>
            <h2>Home1</h2>
        </div>
    );
}
class Routes extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/user">
                    <RouteUser />
                </Route>
                <Route path="/exception">
                    <RouteException />
                </Route>
                <Route path="/list">
                    <RouteList />
                </Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        )
    }
}

export default withRouter(Routes);