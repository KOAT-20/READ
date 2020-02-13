import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
/* Components */
import BarNavigation from './components/navigation.js';
import Login from './components/login.js';
/* Mobile */
import NavigationMobile from './components/mobile/navigation.js';
/* Pages */
import Register from './pages/registro';

class App extends Component {
  state = {
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <Router>
          <BarNavigation modal={this.state.modal14} onModal={this.toggle(14)} />
          <Login modal={this.state.modal14} onModal={this.toggle(14)} />
          <MDBContainer className="mt-5 mb-5">
            {/* <div className='text-center'>
              <img src='https://mdbootstrap.com/img/Others/documentation/1.jpg' className='img-fluid' />
            </div> */}
            <Route exact path='/' />
            <Route path='/registro' component={Register} />
          </MDBContainer>
        </Router>
      );
    }
    return (
      <Router>
        <NavigationMobile modal={this.state.modal14} onModal={this.toggle(14)} />
        <Login modal={this.state.modal14} onModal={this.toggle(14)} />

      </Router>
    );
  }
}
export default withWidth()(App);
