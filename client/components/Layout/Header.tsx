import * as React from "react";

import * as actions from '../../actions/';
import { StoreState, demo } from "../../types";
import { mergeProps } from "../../store/props";

import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from 'react-redux';

import { Layout, Icon, Collapse } from 'antd';

import "./Header.scss";

type PathParamsType = {}

type States = {}

// type Collapsed = boolean | undefined;

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export function mapStateToProps({ demo: { enthusiasmLevel, languageName } }: StoreState) {
    return {
        enthusiasmLevel,
        languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

class Header extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        // this.props.onlayoutSliderHide();
    }

    toggle = () => {

        const { enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        onIncrement && onIncrement();

    }

    render() {

        const { enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={ enthusiasmLevel ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle }
                />
                { enthusiasmLevel }
            </Layout.Header>
        )
    }
}



export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Header));

