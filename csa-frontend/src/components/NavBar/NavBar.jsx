import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid, Button, Typography, makeStyles
} from '@material-ui/core';
import '../../App.css';
import {ReactComponent as Logo}  from '../../assets/logo.svg';
import {ReactComponent as Title} from '../../assets/title_logo.svg';

const useStyles = makeStyles((theme) => ({

  navBar: {
      margin: "10px 0px 0px 0px",
  },
  navBarItem: {
        width: 180,
        height: 38,
        margin: 3,
        backgroundColor: '#96C6FF',
        fontWeight: 700,
  }
}))

const NavBar = (props) => {
  const classes = useStyles();
  const { history } = props;


  return (
    <Grid container justify="center" direction="row" className={classes.navBar}>
      <Button className={classes.navBarItem}>
            Home
      </Button>
      <Button className={classes.navBarItem}>
            About
      </Button>
      <Button className={classes.navBarItem}>
            Pricing
      </Button>
      <Button className={classes.navBarItem}>
            Gallery
      </Button>
      <Button className={classes.navBarItem}>
            Gym
      </Button>
    </Grid>
  );
};

NavBar.displayName = 'NavBar';
export default withRouter(NavBar);
