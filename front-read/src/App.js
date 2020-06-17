import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Route, Switch } from 'react-router-dom';
/* Components */
import Login from './components/login';
/* Pages */
import Recepcion from './pages/recepcion';
/* Mobile */

class App extends Component {
  render () {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <Switch>
          <Route  exact path='/' component={Login} />
          <Route exact path='/recepcion' component={Recepcion} />
        </Switch>
      );
    }
    return (
      <div>Hola</div>
    );
  }
}

export default withWidth()(App);
