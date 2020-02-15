import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn } from 'mdbreact';
// import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

export default class CreateUser extends Component {
  render () {
    return (
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Crear nuevo usuario</MDBCardTitle>
          <form onSubmit={this.props.createUser}>
            <MDBRow>
              <MDBCol lg='2'>
                <MDBInput id="firstname" value={this.props.firstname} type="text" label="User Name" onChange={this.props.changeInput} icon='user' outline />
              </MDBCol>
              <MDBCol lg='2'>
                <MDBInput id="lastname" value={this.props.lastname} type="text" label="Last Name" onChange={this.props.changeInput} icon='user' outline />
              </MDBCol>
              <MDBCol lg='2'>
                <MDBInput id="email" value={this.props.email} type="email" label="Email" onChange={this.props.changeInput} icon='envelope' outline />
              </MDBCol>
              <MDBCol lg='2'>
                <MDBInput id="password" value={this.props.password} type="password" label="Password" onChange={this.props.changeInput} icon='exclamation-triangle' outline />
              </MDBCol>
              {/* <MDBCol lg='2'>
                <FormControl>
        					<InputLabel htmlFor="cargo_empleado">
    								Tipo de Cargo
    							</InputLabel>
      						<Select
        						className="btn-group mr-2"
                    style={{ width: "10rem"}}
                    // value={this.state.cargo}
                    // onChange={this.handleChange}
                    inputProps={{
                      name: 'cargo',
                      id: 'cargo',
                    }}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
            				{this.props.users.map(name => (
            					<MenuItem key={name._id} value={name._id}>{`${name.firstname} ${name.lastname}`}</MenuItem>
            				))}
      						</Select>
        				</FormControl>
              </MDBCol> */}
              <MDBCol lg='2'>
                <div className="text-center mt-2">
                  <MDBBtn type="submit" gradient="blue" style={{borderRadius:'10px'}}>
                    Agregar
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
