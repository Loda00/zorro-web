import React, { Component } from 'react'
import { Card, Header } from 'semantic-ui-react'
import axios from 'axios'

class Home extends Component {
  componentDidMount() {

  }

  handleS3 = (e) => {
    const { files } = e.target
    console.log('file', files)
    const data = new FormData();
    data.append('file', files[0]);
    axios.get('http://localhost:8080/Get_Job/aws/listBuckets')
      .then(rs => console.log('res', rs))
      .catch(err => console.log('err', err))
    // const reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = (e) => {
    //   console.log(e.target.result)
    //   axios.ge
    // }
  }

  render() {
    return (
      <div className="content-view">
        <Header className="content-title" as="h2">Nuevo HDB</Header>
        <Card>
          <Card.Content>
            <input type="file" onChange={this.handleS3} />
          </Card.Content>
        </Card>
        <div className="back" />
      </div>
    )
  }
}

export default Home
