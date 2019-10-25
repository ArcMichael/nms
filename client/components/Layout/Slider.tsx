import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { StoreState } from '../../types/index';
import { mergeProps } from '../../store/props'
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import { Layout, Menu, Icon, message, notification } from 'antd';

type PathParamsType = {
    param1: string;
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    collapsed?: boolean;
}

interface States {

}

export function mapStateToProps({  }: StoreState) {
    return {
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

    componentDidMount() {}

    // constructor(props: Props) {
    //     super(props)
    // }

    // state = {
    //     collapsed: true
    // }

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed
    //     })
    // }

    render() {

        let { collapsed } = this.props;

        return (
            <Layout.Sider trigger={null} collapsible collapsed={ collapsed }>
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
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.SubMenu key="sub1.1" title="Submenu">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="sub1.2" title="Submenu">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                        <Menu.SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="setting" />
                                    <span>Navigation Three</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
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

