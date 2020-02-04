import React, { Component } from 'react';
import {
  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn
} from 'mdbreact';

export default class Register extends Component {
  render () {
    return (
      <MDBCol>
        <MDBCard style={{height:'450px'}}>
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-3'>Resgistro</MDBCardTitle>
            <div className='grey-text mr-5 ml-5 mt-5'>
              <form>
                <MDBRow center>
                    <MDBCol lg='6'>
                      <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Last name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </MDBCol>

                    <MDBCol lg='6'>
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
                    </MDBCol>
                </MDBRow>
                <div className='text-center mt-4'>
                  <MDBBtn>Enviar</MDBBtn>
                </div>
              </form>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
