import React, { Component, Fragment } from 'react'

class Footer extends Component {
  componentDidMount() {
    console.log('Footer')
  }

  render() {
    return (
      <Fragment>
        <div className="footer">Footer</div>
      </Fragment>
    )
  }
}

export default Footer
