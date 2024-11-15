import * as React from 'react';

import * as actions from '../actions/';
import { StoreState } from '../types/index';

import { RouteComponentProps } from 'react-router';
import { withRouter } from "react-router-dom";
import { connect, Dispatch } from 'react-redux';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import './Home.css';

type PathParamsType = {
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export function mapStateToProps({ demo: { enthusiasmLevel, languageName } }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps)
}

class Home extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }
    render() {

        const { enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        return (
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280
                }}
            >
                <div className="hello">
                    <div className="greeting">
                        Hello2 {name + getExclamationMarks(enthusiasmLevel)}
                    </div>
                    <div>
                        <button onClick={onDecrement}>-</button>
                        <button onClick={onIncrement}>+</button>
                    </div>
                </div>
            </Content>
        )
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Home));