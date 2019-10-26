import React, { Component, Fragment } from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { Collapse } from 'antd'
import Logo from 'image/logo.png'
import PhotoUser from 'image/perfil.png'

class Sidebar extends Component {
  componentDidMount() {
    console.log('Sibebar')
  }

  panelAcorden = (item, title) => (
    <label className="title-acordeon"><Icon name={item} /> {title}</label>
  )

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar-fondo">
            <span className="sidebar-logo">
              <Image
                src={Logo}
                size="tiny"
                style={{
                  width: '100%',
                  padding: '16px',
                  cursor: 'pointer',
                }}
              />
            </span>
            <div className="sidebar-content">
              <div className="sidebar-user">
                <span className="photo-user">
                  <Image
                    src={PhotoUser}
                    size="tiny"
                    style={{
                      width: '100%',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  />
                </span>
                <div>Fullstack Developer</div>
                <div>Jhon Neira</div>
              </div>
              <span>
                Principal
              </span>
              <div className="sidebar-routes">
                <div className="sidebar-acordeon">
                  <Collapse accordion expandIconPosition="right">
                    <Collapse.Panel header={this.panelAcorden('plus', 'Nuevo')} key="1">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('edit', 'Editar')} key="2">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('search', 'Buscar HDB')} key="3">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'PC 15 de la UU')} key="4">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Importar HDB ')} key="5">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Exportar')} key="6">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Ocurrencia')} key="7">
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                    </Collapse.Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Sidebar
