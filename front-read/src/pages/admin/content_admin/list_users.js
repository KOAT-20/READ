import React, { Component } from 'react';
import {
  MDBCard, MDBCardHeader, MDBCardBody, MDBCardText, MDBCardFooter, MDBIcon
} from 'mdbreact';

export default class ListUsers extends Component {
  render () {
    return (
      <MDBCard>
        <MDBCardHeader>
          <div className='float-left'>Usuario:</div>
          <div className='float-right'>
            {`${this.props.firstname} ${this.props.lastname}`}
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            Correo: {this.props.email}
            <br/>
            Clave: {this.props.password}
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <MDBIcon
            icon='trash-alt'
            className='red-text float-right'
          />
        </MDBCardFooter>
      </MDBCard>
    );
  }
}
