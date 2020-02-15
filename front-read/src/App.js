import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import axios from 'axios';
/* Components */
import BarNavigation from './components/navigation.js';
import Login from './components/login.js';
/* Mobile */
import NavigationMobile from './components/mobile/navigation.js';
/* Pages */
import Admin from './pages/admin';

class App extends Component {
  state = {
    modal14: false,
    users: [],
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
            <Route exact path='/'>
            <div>
              {this.state.users.map(user => {
                return (
                  <div key={user._id}>{user.lastname}</div>
                )
              })}
            </div>
            </Route>
            <Route path='/administrador' component={Admin} />
          </MDBContainer>
        </Router>
      );
    }
    return (
      <Router>
        <NavigationMobile modal={this.state.modal14} onModal={this.toggle(14)} />
        <Login modal={this.state.modal14} onModal={this.toggle(14)} />
        <MDBContainer className="mb-5">
          <Route exact path='/'>
          <div>
            {this.state.users.map(user => {
              return (
                <div key={user._id}>{user.lastname}</div>
              )
            })}
          </div>
          </Route>
          <Route path='/administrador' component={Admin} />
        </MDBContainer>
      </Router>
    );
  }
}
export default withWidth()(App);
