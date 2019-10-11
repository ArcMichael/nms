import * as React from "react";
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import Home from "./containers/Home";

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

import "./routers.css";

interface Props {

}
class Routes extends React.Component<Props>{

    constructor(props: Props) {
        super(props)
    }

    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Layout id="components-layout-trigger">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <SubMenu key="sub1.1" title="Submenu">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub1.2" title="Submenu">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
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
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
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
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Switch>
                        <Route component={Home} ></Route>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}



export default Routes;

