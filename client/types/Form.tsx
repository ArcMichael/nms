interface ValidateFields {
    (err?: any, value?: any): void;
}

export interface IForm{
    getFieldDecorator: Function;
    resetFields: Function;
    validateFields: ValidateFields;
}