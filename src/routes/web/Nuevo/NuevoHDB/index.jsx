import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'

class NuevoHDB extends Component {
  componentDidMount() {
    console.log('idnex')
  }

  render() {
    return (
      <div className="content-view">
        <Header className="content-title" as="h2">Nuevo HDB</Header>
        <Card className="card-content-custom">
          <Card.Content>
            Hola !!!
          </Card.Content>
        </Card>
        <div className="back" />
      </div>
    )
  }
}

export default NuevoHDB
