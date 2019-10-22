import * as React from 'react';
import { Link } from 'react-router-dom';

import { Result, Button } from 'antd';

type Props = {}

class Exception500 extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <Result
                status="500"
                title="500"
                style={{
                    background: 'none',
                }}
                subTitle="Sorry, the server is reporting an error."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        )
    }

}

export default Exception500