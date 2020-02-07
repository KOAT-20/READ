import React, { Component } from 'react';
import {
  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn
} from 'mdbreact';
import axios from 'axios';

export default class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  createUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    });
    window.location.href = '/';
  }

  changeInput = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
  }

  render () {
    return (
      <MDBCol>
        <MDBCard style={{height:'450px'}}>
          <MDBCardBody>
            <MDBCardTitle className='text-center mt-3'>Resgistro</MDBCardTitle>
            <div className='grey-text mr-5 ml-5 mt-5'>
              <form onSubmit={this.createUser}>
                <MDBRow center>
                    <MDBCol lg='6'>
                      <MDBInput
                        id='firstname'
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.changeInput}
                      />
                      <MDBInput
                        id='lastname'
                        label="Last name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.changeInput}
                      />
                    </MDBCol>

                    <MDBCol lg='6'>
                      <MDBInput
                        id='email'
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.changeInput}
                      />
                      <MDBInput
                        id='password'
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={this.changeInput}
                      />
                    </MDBCol>
                </MDBRow>
                <div className='text-center mt-4'>
                  <MDBBtn color='primary' type='submit' className='w-50'>Enviar</MDBBtn>
                </div>
              </form>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
