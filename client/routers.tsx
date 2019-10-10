import * as React from "react";
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import Hello from "./containers/Hello";
import Hello2 from "./containers/Hello2";
import { connect } from "react-redux";
import { Dispatch } from 'redux';

import Home from "./containers/Home";

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import "./routers.css";

interface Props{

}
class Routes extends React.Component<Props>{

    constructor(props: Props){
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
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
                        <Route component={ Home } ></Route>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}



export default Routes;

