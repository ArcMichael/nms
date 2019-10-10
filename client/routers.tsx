import * as React from "react";
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import Hello from "./containers/Hello";
import Hello2 from "./containers/Hello2";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import Home from "./containers/Home";

interface Props {
    cName?: string;
    changeName?: any;
}

class Routes extends React.Component<Props>{
    render() {
        return (
            <Switch>
                {/* <Route path="/2" name="2" component={Hello2}></Route> */}
                <Route component={Home}></Route>
            </Switch>
        )
    }
}



export default Routes;

