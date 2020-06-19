import React, { Component } from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdbreact';
/* Components */
import BarRecep from './content/bar_recep.js';

export default class Recepcion extends Component {
  render () {
    return (
      <div>
        <BarRecep />
        <MDBContainer className='mt-5'>
          <MDBCard>
            <MDBCardBody>
              Listado de solicitudes
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}
