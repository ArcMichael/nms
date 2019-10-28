import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { StoreState } from '../../types/index';
import { mergeProps } from '../../store/props'
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import { Layout, Menu, Icon, message, notification } from 'antd';

type PathParamsType = {}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    sliderBar?: boolean;
}

interface States { }

export function mapStateToProps({ layout: { sliderBar } }: StoreState) {
    return {
        sliderBar
    }
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {

    }
}

class Slider extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() { }

    render() {

        const { sliderBar } = this.props;

        return (
            <Layout.Sider trigger={null} collapsible collapsed={sliderBar}>
                <div className="logo" />
                <Menu theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >
                    <Menu.SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Convert</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <Link to="/convert/images">Images</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="2">
                        <Icon type="pie-chart" />
                        <span>Dashboard</span>
                        <Link to="/Dashboard">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Icon type="pie-chart" />
                        <span>List</span>
                        <Link to="/list">List</Link>
                    </Menu.Item>

                    <Menu.SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>Exception</span>
                            </span>
                        }
                    >
                        <Menu.Item key="4">
                            <Link to="/exception/403">403</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/exception/404">404</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/exception/404">404</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu>
            </Layout.Sider>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Slider));

