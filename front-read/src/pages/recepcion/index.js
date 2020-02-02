import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
/* Components */

class Recepcion extends Component {
  render() {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <Router>
          {/* <BarNavigation /> */}
          <MDBContainer className="mt-5 mb-5">

          </MDBContainer>
        </Router>
      );
    }
    return (
      <div>
        hola
      </div>
    );
  }
}
export default withWidth()(Recepcion);
