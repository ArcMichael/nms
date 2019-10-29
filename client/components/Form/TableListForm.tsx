import * as React from 'react';

import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { IForm } from "../../types/Form";

import "./TableListForm.scss"

type Props = {
    form: IForm
};
type Status = {
    expand: boolean;
}

class TableListForm extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            expand: false,
        };
    }

    getFields() {
        const { getFieldDecorator } = this.props.form;
        const count = this.state.expand ? 10 : 6;
        let children = [];
        for (let i = 0;i < 10;i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<Input placeholder="placeholder" />)}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    }

    handleSearch = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    toggle() {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    render() {

        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Search
            </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
            </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }

}

export default Form.create({ name: 'advanced_search' })(TableListForm)