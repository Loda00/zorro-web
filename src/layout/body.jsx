import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { stateSidebar } from 'actions/sidebar'

import Footer from './footer'

class Body extends Component {
  componentDidMount() {
    console.log('Body1')
  }

  render() {
    console.log('this.props', this.props)
    const { children } = this.props
    return (
      <Fragment>
        <div className="body">
          {/* <div>sadsadsadsad</div> */}
          <div className="head-body">
            <div className="head-body-left">
              <Icon size="small" name="home" />
            </div>
            <div className="head-body-right">
              <Icon size="small" name="home" />
              <Icon size="small" name="home" />
              <Icon size="small" name="home" />
              <Icon size="small" name="home" />
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  side: state,
})

const mapDispatchToProps = dispatch => ({
  setStateSide: value => dispatch(stateSidebar(value)),
})

const Main = connect(mapStateToProps, mapDispatchToProps)(Body)

export default Main
