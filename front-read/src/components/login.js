import React, { Component } from 'react';
import {
  MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon
} from 'mdbreact';

export default class Login extends Component {
  render () {
    return (
      <MDBContainer>
        <MDBIcon
          onClick={this.props.onModal}
          icon='user-circle'
          className='icon_user_login'
          size='2x'
        />
        <MDBModal isOpen={this.props.modal} toggle={this.props.onModal} centered>
          <MDBModalHeader
            titleClass='font-weight-bold'
            toggle={this.props.onModal}
            >
              Inicio de Sesión
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="grey-text ml-5 mr-5 mt-5">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
                <div className='float-left'>
                  <a href='/registro'>Registrarse</a><br/>
                  <a href='/'>¿Olvido su contraseña?</a>
                </div>
                <div className="float-right">
                  <MDBBtn color="cyan" type="submit">
                    Iniciar Sesión
                  </MDBBtn>
                </div>
              </div>
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
