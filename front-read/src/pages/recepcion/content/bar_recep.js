import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Button, Typography, IconButton, MenuItem, Menu, withStyles
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class BarRecep extends Component {
  state = {
    auth: true,
    anchorEl: null,
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Link to='/recepcion'>
            <div className='btn-group'>
              <Button color='primary' variant='outlined'>INICIO</Button>
            </div>
          </Link>
          <Link to='/formulario'>
            <div className='btn-group ml-2'>
              <Button variant='outlined'>Registro</Button>
            </div>
          </Link>
          <Link to='/consulta'>
            <div className='btn-group ml-2'>
              <Button variant='outlined'>Consulta</Button>
            </div>
          </Link>
          <Typography
            variant='h6'
            color='inherit'
            className={classes.grow}>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                <MenuItem onClick={this.handleClose}>Mi Cuenta</MenuItem>
                <Link to='/'>
                  <MenuItem> Cerrar Sesión </MenuItem>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

BarRecep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarRecep);
