import React, { Component, Fragment } from 'react'

class Footer extends Component {
  componentDidMount() {
    console.log('Footer')
  }

  render() {
    return (
      <Fragment>
        <div className="footer">
          <div className="footer-items">
            <span>Desarrolladores aquí</span>
            <span>© Sistema de Datos  de Personal</span>
            <span>xxx</span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer
