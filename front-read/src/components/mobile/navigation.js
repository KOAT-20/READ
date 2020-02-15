import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem, ListItemText, ListItemIcon, SwipeableDrawer, Divider
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  link: {
    color: 'black',
  }
});

export default function NavigationMobile (props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <MDBNavLink to='/' className={classes.link}>
        <ListItem button>
            <ListItemIcon>
              <MDBIcon icon='home' />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
        </ListItem>
      </MDBNavLink>
      <Divider />
      <MDBNavLink to='/lista_solicitudes' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <MDBIcon far icon='list-alt' />
          </ListItemIcon>
          <ListItemText>Solicitudes</ListItemText>
        </ListItem>
      </MDBNavLink>
      <Divider />
      <MDBNavLink to='/registro_solicitud' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <MDBIcon far icon='plus-square' />
          </ListItemIcon>
          <ListItemText>Nueva Solicitud</ListItemText>
        </ListItem>
      </MDBNavLink>
      <Divider />
      <MDBNavLink to='/administrador' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <MDBIcon icon='user-tie' />
          </ListItemIcon>
          <ListItemText>Admin</ListItemText>
        </ListItem>
      </MDBNavLink>
      <Divider />
    </div>
  );

  return (
    <div>
      <MDBNavbar color='indigo' style={{boxShadow:'none'}} dark>
        <MDBNavbarNav left>
          <MDBNavItem onClick={toggleDrawer('left', true)}>
            <MDBIcon icon='bars' className='white-text' size='2x' />
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem onClick={props.onModal}>
            <MDBIcon icon='user' className='white-text' size='2x' />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>

  );
}
