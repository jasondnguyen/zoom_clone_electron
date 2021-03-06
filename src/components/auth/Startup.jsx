import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Grid,
  createStyles,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      color: '#2D8CFF',
      fontSize: '3.5em',
      fontWeight: '1000',
    },
    joinButton: {
      backgroundColor: '#0E71EB',
      color: 'white',
      borderRadius: '8px',
      paddingLeft: '55px',
      paddingRight: '55px',
      fontSize: '.85em',
      marginTop: '6em',
    },
    signIn: {
      marginTop: '15px',
      border: '2px solid #EDEDF4',
      borderRadius: '8px',
      fontSize: '.85em',
    },
    version: {
      marginTop: '90px',
    },
  })
);

export default function Startup() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <form>
          <Grid item xs="auto" align="center">
            <Typography variant="h4" component="h1" className={classes.logo}>
              zoom
            </Typography>
            <Grid item xs="auto">
              <Button
                component={Link}
                to="/joinmeeting"
                variant="contained"
                size="small"
                fullWidth
                disableElevation
                className={classes.joinButton}
              >
                Join a meeting
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                size="small"
                component={Link}
                to="/login"
                disableElevation
                fullWidth
                className={classes.signIn}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs="auto" align="center">
              <Typography
                variant="caption"
                component="h2"
                className={classes.version}
              >
                Version 1.0.0
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
