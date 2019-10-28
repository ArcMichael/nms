import * as React from 'react';

import Wrapper from "../../components/Wrapper";

import TableListForm from "../../components/Form/TableListForm";

import { Layout, Form, Input, Icon, Checkbox, Tabs, Result, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { Table, Divider, Tag } from 'antd';

import { IColumns, IDataSource } from "../../types/List";


type Props = {}

type Status = {}

const columns: IColumns[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];


const dataSource: IDataSource[] = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

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
                <TableListForm />
                <Table columns={columns} dataSource={dataSource} />
            </Wrapper>
        );
    }

}

export default TableList