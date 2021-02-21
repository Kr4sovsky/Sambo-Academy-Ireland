import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid, Button, Typography, makeStyles
} from '@material-ui/core';
import '../../App.css';
import {ReactComponent as Logo}  from '../../assets/logo.svg';
import {ReactComponent as Title} from '../../assets/title_logo.svg';
import NavBar from '../NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  header: {
      // margin: "20px",
  },
  titleLogo: {
        width: '80vw',
        height: 115,
  },
}))

const Header = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" direction="row" className={classes.header}>
    <Grid>
      <Grid item>
            {/* Uncomment to include better logo */}
            {/* <Logo className={classes.logo} alt="Logo" /> */}
      </Grid>
      <Grid item>
            <Title className={classes.titleLogo} alt="Title" />
      </Grid>
      <NavBar/>

      </Grid>
    </Grid>
  );
};

Header.displayName = 'Header';
export default withRouter(Header);
