import * as React from "react";

import * as actions from '../../actions/';
import { StoreState } from "../../types";

import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from 'react-redux';

import { Layout, Icon } from 'antd';

type PathParamsType = {
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    layoutSliderHide?: () => void;
    layoutSliderShow?: () => void;
}

export function mapStateToProps({ layout }: StoreState){
    return {
        layout
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LayoutSliderAction>) {
    return {
        onlayoutSliderHide: () => dispatch(actions.layoutSliderHide()),
        onlayoutSliderShow: () => dispatch(actions.layoutSliderShow()),
    }
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
}

class Header extends React.Component<Props, {}>{

    constructor(props: Props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        // this.props.onlayoutSliderHide();
    }

    state = {
        collapsed: false
    }

    toggle = () => {
        console.log(this.props)
        // let { layout: { slider }, layoutSliderShow } = this.props;
    }

    render() {

        const { location } = this.props;
        const { pathname } = location

        console.log(this.props)

        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={ this.toggle }
                />
            </Layout.Header>
        )
    }
}



export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Header));

