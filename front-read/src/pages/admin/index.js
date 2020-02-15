import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';
/* Component */
import CreateUser from './content_admin/create_user.js';
import ListUsers from './content_admin/list_users.js';

export default class Admin extends Component {
  state = {
    users: [],
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  async componentDidMount () {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    this.setState ({
      users: res.data
    })
    // console.log('Usuarios:', res.data);
  }

  createUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    })
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    })
    this.getUsers();
  }

  deleteUser = async (id) => {
    // console.log(`User delete with the ID: ${id}`);
    await axios.delete(`http://localhost:3000/api/users/${id}`)
    this.getUsers();
  }

  changeInput = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
  }

  render () {
    return (
      <MDBRow>
        <MDBCol lg='12'>
          <CreateUser
            createUser={this.createUser}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            password={this.state.password}
            changeInput={this.changeInput}
            users={this.state.users}
          />
        </MDBCol>
        {this.state.users.map(user => {
          return (
            <MDBCol key={user._id} className='mt-5' lg='4'>
              <ListUsers
                firstname={user.firstname}
                lastname={user.lastname}
                email={user.email}
                password={user.password}
                deleteUser={()=> this.deleteUser(user._id)}
              />
            </MDBCol>
        )})}
      </MDBRow>
    );
  }
}
