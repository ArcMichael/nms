import * as React from 'react';

import { Result, Icon, Button, notification } from 'antd'

interface Props {
    Slider?: Boolean;
    Header?: Boolean;
}

interface State {

}



class Smile extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
    }

    openNotification = () => {

        // notification.config({
        //     placement: "bottomLeft"
        // })

        const args = {
            message: 'Notification Title',
            description:
                'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0,
        };
    
        notification.open(args);
    };

    render() {
        return (
            <Result
                icon={<Icon type="smile" theme="twoTone" />}
                title="Great, we have done all the operations!"
                extra={<Button type="primary" onClick={this.openNotification.bind(this)}>Next</Button>}
            />
        )
    }
}

export default Smile