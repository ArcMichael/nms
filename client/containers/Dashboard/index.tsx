import * as React from 'react';
import Wrapper from "../../components/Wrapper";

type Props = {}

type Status = {}

class Dashboard extends React.Component<Props, Status>{
    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <Wrapper
                WrapperHeader
                WrapperContext
                WrapperBreadcrumb
                WrapperFooter
                WrapperSlider
            >
            </Wrapper>
        );
    }

}

export default Dashboard