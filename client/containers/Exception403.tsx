import * as React from 'react';
import { Link } from 'react-router-dom';

import { Result, Button } from 'antd';

type Props = {}

class Exception403 extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <Result
                status="403"
                title="403"
                style={{
                    background: 'none',
                }}
                subTitle="Sorry, you don't have access to this page."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        )
    }

}

export default Exception403