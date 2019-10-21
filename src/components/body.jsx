import React, { Component } from 'react'

import Footer from './footer'

class Body extends Component {
  componentDidMount() {
    console.log('Body1')
  }

  render() {
    return (
      <div className="body">
        <div>Body</div>
        <Footer />
      </div>
    )
  }
}

export default Body
