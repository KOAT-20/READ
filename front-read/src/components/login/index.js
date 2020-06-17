import React, { Component } from 'react';
import {
  MDBContainer, MDBInput, MDBCard, MDBCardBody, MDBIcon,
} from 'mdbreact';

export default class Login extends Component {
  render () {
    return (
      <MDBContainer className='d-flex justify-content-center mt-5'>
        <MDBCard className='w-50'>
          <MDBCardBody>
            <div className='text-center'>
              <MDBIcon icon='user' size="3x" />
              <h3 className='mt-2'>INICIO DE SESIÓN</h3>
            </div>
            <form>
              <MDBInput id='correo' label='Correo' icon='envelope' type='email' outline  />
              <MDBInput id='clave' label='Contraseña' icon='lock' type='password' outline  />
              <div className='text-center w-auto'>
                <button className='btn btn-primary'>Ingresar</button>
              </div>
            </form>
            <div className='text-center'>
              <a href='/'>¿Olvido su Contraseña?</a>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}
