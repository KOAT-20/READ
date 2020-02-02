import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class RouterMain extends Component {
  render() {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <div>
          hola
        </div>
      );
    }
    return (
      <div>
        como
      </div>
    );
  }
}
export default withWidth()(RouterMain);
