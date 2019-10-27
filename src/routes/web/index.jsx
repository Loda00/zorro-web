import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Container } from 'layout'

import Home from './Home'
import NotFound from './404'

class Web extends Component {
  componentDidMount() {
    console.log('wevbbbb')
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect
                  to={{
                    pathname: '/index',
                  }}
                />
              )}
            />
            <Route path="/index" component={Home} />
            {/* <Route path="/HDB" component={HDB} /> */}
            <Route component={NotFound} />
          </Switch>
        </Container>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          draggable={false}
          toastClassName="custom-toast-container"
          bodyClassName="custom-toast-body"
        />
      </Fragment>
    )
  }
}

export default Web
