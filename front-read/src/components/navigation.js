import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
/* Style */
import './styles/navigation.scss';

export default class BarNavigation extends Component {
  render () {
    return (
      <MDBNavbar color='indigo' dark expand='md' style={{boxShadow:'none'}}>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to='/'>Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/lista_solicitudes'>Solicitudes</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/registro_solicitud'>Nueva Solicitud</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to='/administrador'>Admin</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to='/presidencia'>Presidencia</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem onClick={this.props.onModal} className='ml-2'>
            <MDBIcon className='icon_user_login' size='2x' icon='user-circle' />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
