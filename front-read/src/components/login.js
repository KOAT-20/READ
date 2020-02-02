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
          <MDBModalHeader toggle={this.props.onModal}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <form>
              <p className="h4 text-center py-4">Sign In</p>
              <div className="grey-text">
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
              </div>
              <div className='text-center'>
                <a href='/registro'>Registrarse</a>
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
