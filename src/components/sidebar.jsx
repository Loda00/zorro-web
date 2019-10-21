import React, { Component, Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import Logo from 'image/logo.png'

class Sidebar extends Component {
  componentDidMount() {
    console.log('Sibebar')
  }

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar-fondo">
            <span className="my-logo">
              <Image
                src={Logo}
                size="tiny"
                style={{
                  width: '350px',
                  height: '80px',
                  padding: '13px 10px',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              />
            </span>
            <div className="nav">
              a
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Sidebar
