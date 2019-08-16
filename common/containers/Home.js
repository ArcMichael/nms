import React from 'react';
import { Result, Button } from 'antd';

class HOME extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Home</Button>}
            />
        );
    }
}

export default HOME;