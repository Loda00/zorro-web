import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from 'image/404.jpg'
import NuevoHDB from './NuevoHDB'

const Nuevo = () => (
  <Switch>
    {/* <Route
      exact
      path="/HDB"
      render={() => (
        <Redirect
          to={{
            pathname: '/HDB/buscar-usuario',
          }}
        />
      )}
    /> */}
    <Route path="/nuevo/nuevo-hdb" component={NuevoHDB} />
    {/* <Route path="/HDB/datos-personales" component={Home} />
    <Route path="/HDB/nuevo-usuario" component={CreateUser} />
    <Route path="/HDB/nacimiento" component={Home} />
    <Route path="/HDB/caracteristicas-fisicas" component={Home} /> */}
    <Route component={NotFound} />
  </Switch>
)

export default Nuevo
