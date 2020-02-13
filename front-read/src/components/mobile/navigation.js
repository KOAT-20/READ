import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';
import { } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavigationMobile (props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  return (
    <MDBNavbar color='indigo' style={{boxShadow:'none'}} dark>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBIcon icon='bars' className='white-text' size='2x' />
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem onClick={props.onModal}>
          <MDBIcon icon='user' className='white-text' size='2x' />
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}
