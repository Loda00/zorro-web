import React, { Component, Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import Logo from 'image/logo.png'
import PhotoUser from 'image/perfil.png'

class Sidebar extends Component {
  componentDidMount() {
    console.log('Sibebar')
  }

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar-fondo">
            <span className="sidebar-logo">
              <Image
                src={Logo}
                size="tiny"
                style={{
                  width: '100%',
                  padding: '16px',
                  cursor: 'pointer',
                }}
              />
            </span>
            <div className="sidebar-content">
              <div className="sidebar-user">
                <span className="photo-user">
                  <Image
                    src={PhotoUser}
                    size="tiny"
                    style={{
                      width: '100%',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  />
                </span>
                <div>XXX</div>
                <div>XXX</div>
              </div>
              <div className="sidebar-">
                a
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Sidebar
