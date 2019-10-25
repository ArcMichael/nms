import * as React from "react";

import * as actions from '../../actions/';
import { StoreState } from "../../types";
import { mergeProps } from "../../store/props";

import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from 'react-redux';

import { Layout, Icon } from 'antd';

import "./Header.scss";

type PathParamsType = {
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    layoutSliderHide?: () => void;
    layoutSliderShow?: () => void;
}

export function mapStateToProps({  }: StoreState){
    return {
        
    }
}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
    }
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

