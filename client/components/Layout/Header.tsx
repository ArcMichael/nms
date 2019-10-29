import * as React from "react";

import * as actions from '../../actions/';
import { StoreState } from "../../types";
import { mergeProps } from "../../store/props";

import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from 'react-redux';

import { Layout, Icon, Collapse } from 'antd';

import "./Header.scss";

type PathParamsType = {}
type States = {}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    sliderBar?: boolean;
    enthusiasmLevel?: number;
    sliderbarShow?: () => void;
    sliderbarHide?: () => void;
}

export function mapStateToProps({ layout: { sliderBar } }: StoreState) {
    return {
        sliderBar
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SliderBarAction>) {
    return {
        sliderbarShow: () => dispatch(actions.sliderbarShow()),
        sliderbarHide: () => dispatch(actions.sliderbarHide()),
    }
}

class Header extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    toggle = () => {
        const { sliderbarShow, sliderbarHide, sliderBar } = this.props;
        if( sliderBar === false ){
            return sliderbarShow && sliderbarShow();
        }
        if( sliderBar === true ){
            return sliderbarHide && sliderbarHide();
        }

    }

    render() {

        const { sliderBar } = this.props;

        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={ sliderBar ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle }
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

