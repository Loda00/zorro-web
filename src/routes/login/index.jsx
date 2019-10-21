import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom';
import Login from './login'

const Route = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
)

const mapStateToProps = state => ({
  test: state,
})

const Main = connect(mapStateToProps)(Login)

export default Main
