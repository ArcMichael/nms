import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import { Layout, Menu, Icon, message, notification } from 'antd';

type PathParamsType = {
    param1: string;
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    someString?: string;
}

interface States {

}

class Footer extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {

        const { location } = this.props;
        const { pathname } = location

        return (
            <Layout.Footer>Footer</Layout.Footer>
        )
    }
}



export default withRouter(Footer)

