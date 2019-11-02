import React, { Component, Fragment } from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
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

  handleRedirectHome = () => {
    const { history } = this.props
    history.push('/index')
  }

  render() {
    return (
      <Fragment>
        <div className="sidebar">
          <div className="sidebar-fondo">
            <span
              className="sidebar-logo"
              onClick={this.handleRedirectHome}
            >
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
                      <NavLink
                        to="/nuevo/nuevo-hdb"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Nuevo HDB
                        </div>
                      </NavLink>
                      <NavLink
                        to="/HDB/buscar-usuario"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Crear curso
                        </div>
                      </NavLink>
                      <NavLink
                        to="/HDB/buscar-usuario"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Ocurrencias
                        </div>
                      </NavLink>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('edit', 'Editar')} key="2">
                      <NavLink
                        to="/editar/datos-personales"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Datos personales
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/fecha-nacimiento"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Fecha de Nacimiento
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/catateristica-fisica"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Caraterísticas físicas
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/domicilio-actual"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Domicilio actual
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/documento-personal"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Documentos personales
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/educacion"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Educación
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/otros-cursos"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Otros cursos
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/viajes-extranjero"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Viajes al extranjero
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/idiomas-conocidos"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Idiomas que conoce
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/empleos-militares"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Empleos militares
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/empleos-civiles"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Empleos civiles
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/arma-poseida"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Arma que posee
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/armamento-conocido"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Armamento conocido
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/conocidos-presos"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Conocidos en penales
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/conocidos-publicos"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Conocidos públicos
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/antecedentes-policiales-penales"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Antecedentes poli/judi
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/antecedentes-militares"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Antecedentes militares
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/antecedentes-politicos"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Antecedentes políticos
                        </div>
                      </NavLink>
                      <NavLink
                        to="/editar/datos-familiares"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Datos familiares
                        </div>
                      </NavLink>

                    </Collapse.Panel>

                    <Collapse.Panel header={this.panelAcorden('search', 'Buscar HDB')} key="3">
                      <NavLink
                        to="/HDB/buscar-usuario"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Buscar hoja de datos
                        </div>
                      </NavLink>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'PC 15 de la UU')} key="4">
                      <NavLink
                        to="/pc/nuevo-pc"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Nuevo PC 15
                        </div>
                      </NavLink>
                      <NavLink
                        to="/pc/actualizar-pc"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Actualizar PC 15
                        </div>
                      </NavLink>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Importar HDB ')} key="5">
                      <NavLink
                        to="/importar/buscar-usuario"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          HDB otra dependencia
                        </div>
                      </NavLink>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Exportar')} key="6">
                      <NavLink
                        to="/exportar/HDB"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Exportar HDB
                        </div>
                      </NavLink>
                    </Collapse.Panel>
                    <Collapse.Panel header={this.panelAcorden('home', 'Ocurrencia')} key="7">
                      <NavLink
                        to="/HDB/buscar-usuario"
                        className="sidebar-sub-menu-item"
                      >
                        <div className="sidebar-sub-menu-title">
                          Ocurrencias generales
                        </div>
                      </NavLink>
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

export default withRouter(Sidebar)
