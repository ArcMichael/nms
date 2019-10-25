import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import * as Antd from 'antd';

type PathParamsType = {
    param1: string;
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    someString?: string;
}

interface States {

}

class Breadcrumb extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {

        const { location } = this.props;
        const { pathname } = location

        return (
            <div style={{ backgroundColor: '#fff' }}>
                <Antd.Breadcrumb style={{ margin: '16px 24px' }}>
                    <Antd.Breadcrumb.Item>
                        <a href="">Ant Design</a>
                    </Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item>
                        <a href="">Component</a>
                    </Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item>
                        <a href="">General</a>
                    </Antd.Breadcrumb.Item>
                    <Antd.Breadcrumb.Item>
                        <a href="">Button</a>
                    </Antd.Breadcrumb.Item>
                </Antd.Breadcrumb>
            </div>
        )
    }
}



export default withRouter(Breadcrumb)

