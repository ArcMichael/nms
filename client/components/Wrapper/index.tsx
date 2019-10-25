import * as React from "react";
import { Switch, RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import { StoreState } from "../../types";

import Slider from "../Layout/Slider"
import Header from "../Layout/Header";
import Content from "../Layout/Content";
import Breadcrumb from "../Layout/Breadcrumb";
import { Layout } from "antd";
import Footer from "../Layout/Footer";

type PathParamsType = {}
type Props = RouteComponentProps<PathParamsType> & {
    WrapperHeader: boolean;
    WrapperContext: boolean;
    WrapperBreadcrumb: boolean;
    WrapperFooter: boolean;
    WrapperSlider: boolean;
    WrapperLayout?: boolean;
}
type Status = {}

export function mapStateToProps({ }: StoreState) {
    return {}
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {}
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
}

class Wrapper extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
    }

    render() {

        let { WrapperHeader, WrapperContext, WrapperFooter, WrapperSlider, WrapperBreadcrumb } = this.props;

        return (
            <Layout>
                { WrapperSlider ? <Slider /> : null}
                <Layout>
                    { WrapperHeader ? <Header /> : null }
                    { WrapperBreadcrumb? <Breadcrumb />: null }  
                    { WrapperContext ? <Content />: null }
                    { WrapperFooter ? <Footer />: null }
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(connect(  
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Wrapper));