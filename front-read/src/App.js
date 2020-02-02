import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
/* Components */
import BarNavigation from './components/navigation.js';

class App extends Component {
  render() {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <Router>
          <BarNavigation />
          <MDBContainer className="mt-5 mb-5">
            hola
          </MDBContainer>
        </Router>
      );
    }
    return (
      <div>
        como
      </div>
    );
  }
}
export default withWidth()(App);
