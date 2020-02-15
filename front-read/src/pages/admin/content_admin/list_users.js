import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';

export default class ListUsers extends Component {
  render () {
    return (
      <MDBListGroup>
        {this.props.users.map(user =>
          <MDBListGroupItem className="list-group-item-action" key={user._id}>
            <MDBRow className='text-center'>
              <MDBCol sm='3'>
                <div className='float-left'>{user.firstname} {user.lastname}</div>
              </MDBCol>
              <MDBCol>
                <div>{user.email}</div>
              </MDBCol>
              <MDBCol>
                <div>{user.password}</div>
              </MDBCol>
              <MDBCol>
                <MDBIcon
                  icon="trash-alt" className="red-text float-right"
                  style={{cursor:'pointer'}}
                  onClick={() => this.props.deleteUser(user._id)}
                />
              </MDBCol>
            </MDBRow>

          </MDBListGroupItem>
        )}
      </MDBListGroup>
    );
  }
}
