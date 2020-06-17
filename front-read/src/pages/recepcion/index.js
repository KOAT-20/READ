import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
/* Components */
import BarRecep from './content/bar_recep.js';

export default class Recepcion extends Component {
  render () {
    return (
      <div>
        <BarRecep />
        <MDBContainer>
          
        </MDBContainer>
      </div>
    );
  }
}
