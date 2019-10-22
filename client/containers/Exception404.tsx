import * as React from 'react';
import { Link } from 'react-router-dom';

import { Result, Button } from 'antd';

type Props = {}

class Exception404 extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <Result
                status="404"
                title="404"
                style={{
                    background: 'none',
                }}
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        )
    }

}

export default Exception404