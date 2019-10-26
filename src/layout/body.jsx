import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon, Input } from 'semantic-ui-react'
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
          <div className="head-body">
            <div className="head-body-left">
              <Input
                loading
                icon="user"
                placeholder="Search..."
                className="input-search"
              />
            </div>
            <div className="head-body-right">
              <Icon name="home head-items" />&nbsp;
              <Icon name="comment alternate outline head-items" />&nbsp;
              <Icon name="bell outline head-items" />&nbsp;
              <Icon name="settings head-items" />&nbsp;
              <Icon name="question head-items" />&nbsp;
            </div>
          </div>
          <div className="body-content">
            {children}
          </div>
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
