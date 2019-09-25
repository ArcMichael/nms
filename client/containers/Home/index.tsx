import React, { Component } from 'react'

export interface HomeProps {
    compiler: string;
    framework: string;
}
class Home extends Component<HomeProps,{}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
  }
}

export default Home
