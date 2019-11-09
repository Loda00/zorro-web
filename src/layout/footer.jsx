import React, { Component, Fragment } from 'react'
import { Image } from 'semantic-ui-react'

import Logo from 'image/logoFooter.png'

class Footer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <div className="footer">
          <div className="footer-items">
            <span>Desarrolladores aquí</span>
            <span>© Sistema de Datos  de Personal</span>
            <span className="sidebar-logo">
              <Image
                src={Logo}
                size="tiny"
                style={{
                  width: '100%',
                  height: '78%',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
              />
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer
