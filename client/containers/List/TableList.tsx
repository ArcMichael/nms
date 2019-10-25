import * as React from 'react';

import Wrapper from "../../components/Wrapper";

import { Layout, Form, Input, Icon, Checkbox, Tabs, Result, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


type Props = {
}
type Status = {}

class TableList extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <Wrapper
                WrapperHeader
                WrapperContext
                WrapperBreadcrumb
                WrapperFooter
                WrapperSlider
            >
                Conest
            </Wrapper>
        );
    }

}

export default TableList