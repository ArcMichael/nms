import React from 'react';
import { Result, Button } from 'antd';

class ERROR extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }
}

export default ERROR;