import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
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
        <input type="checkbox" className="open-close" id="open-close" />
        <label className="open-close-label" htmlFor="open-close">
          <Icon size="large" name="content" />
        </label>
        <Sidebar />
        <Body>{children}</Body>
      </div>
    )
  }
}

export default Container
