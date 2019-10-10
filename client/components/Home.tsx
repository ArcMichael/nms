import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Home.css';

const { Header, Sider, Content } = Layout;

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export interface State {
    collapsed: boolean;
}

export default class Home extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280
                }}
            >
                Home
        </Content>
        )
    }
}
