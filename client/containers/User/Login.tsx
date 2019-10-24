import * as React from 'react';

import { Layout, Form, Input, Icon, Checkbox, Tabs, Result, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import './index.scss';

type Props = {
    form: {
        getFieldDecorator: any;
        getFieldsError: any;
        getFieldError: any;
        isFieldTouched: any;
        validateFields: any;
    },
    className: string;
}
type Status = {}

class Login extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }

    render() {

        const { form, className = "login" } = this.props;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

        return (
            <Layout className={className}>
                <Content>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>

                </Content>
                <Footer>
                    MIC
                </Footer>
            </Layout>
        );
    }

}

export default Form.create({ name: 'login' })(Login);