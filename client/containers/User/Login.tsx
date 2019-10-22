import * as React from 'react';
import { Link } from 'react-router-dom';

import { Result, Button } from 'antd';

type Props = {}
type Status = {}

class Login extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
           <div>Login</div>
        )
    }

}

export default Login