import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Ffdp from './images/FFDP.png'
import Converge from './images/Converge.png'
import MonoLord from './images/MonoLord.png'
import UponBB from './images/UponBB.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pic: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.pic}>
              <img className = "Ffdp" src ={Ffdp} alt = "FFDP"/>
              Five Finger Death Punch
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.pic}>
          <img className = "Converge" src ={Converge} alt = "Converge"/>
          Converge
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.pic}>
              <img className = "MonoLord" src ={MonoLord} alt = "MonoLord"/>
              MonoLord
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.pic}>
              <img className = "UponBB" src ={UponBB} alt = "Upon a Burning Body"/>
              Upon a Burning Body
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}