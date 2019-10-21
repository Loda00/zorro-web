import React, { Component } from 'react'

import Sidebar from './sidebar'
import Body from './body'

class Container extends Component {
  componentDidMount() {
    console.log('Container')
  }

  render() {
    const { children } = this.props
    return (
      <div className="main-container">
        <Sidebar />
        <Body>{children}</Body>
      </div>
    )
  }
}

export default Container
