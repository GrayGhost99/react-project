import React from 'react';
import ArtP1 from "./images/Art_Pick_1.png"
import ArtP2 from "./images/Art_Pick_2.png"
import ArtP3 from "./images/Art_Pick_3.png"
import P1 from "./images/Pick_1.png"
import P2 from "./images/Pick_2.png"
import P3 from "./images/Pick_3.png"
import P4 from "./images/Pick_4.png"
import P5 from "./images/Pick_5.png"
import P6 from "./images/Pick_6.png"
import AceP1 from "./images/Ace_Pick_1.png"
import AceP2 from "./images/Ace_Pick_2.png"
import AceP3 from "./images/Ace_Pick_3.png"
import smoke from "./images/smoke.png"
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
createStyles({
	paper: {
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.primary,
	},
	root: {
	flexGrow: 1,
	},
}),
);

export default function FullWidthGrid() {
const classes = useStyles();

return (
	<div style={{ width: '100%', backgroundColor: 'white',
				padding: '10px' }}>
          
	<Grid container spacing={1}>
		<Grid item xs={12}>
		<Paper className={classes.paper}>
      <img className = "smoke" src = {smoke} alt= "smoke"/>			
		</Paper>
		</Grid>
    <Grid item xs={12} sm={6}>
		<Paper className={classes.paper}>
      <label>Artist and Ace Picks</label>
      <hr/>
      <img className = "ArtP1" src = {ArtP1} alt= "Artist Pick 1"/>
      <img className = "ArtP2" src = {ArtP2} alt= "Artist Pick 2"/>
      <img className = "ArtP3" src = {ArtP3} alt= "Artist Pick 3"/>
      <img className = "AceP1" src = {AceP1} alt= "Ace Pick 1"/>
      <img className = "AceP2" src = {AceP2} alt= "Ace Pick 2"/>
      <img className = "AceP3" src = {AceP3} alt= "Ace Pick 3"/>
    </Paper>
		</Grid>
		<Grid item xs={12} sm={6}>
		<Paper className={classes.paper}>
      <label>Custom Picks</label>
      <hr/>
      <img className = "P1" src = {P1} alt= "Pick 1"/>
      <img className = "P2" src = {P2} alt= "Pick 2"/>
      <img className = "P3" src = {P3} alt= "Pick 3"/>
      <img className = "P4" src = {P4} alt= "Pick 4"/>
      <img className = "P5" src = {P5} alt= "Pick 5"/>
      <img className = "P6" src = {P6} alt= "Pick 6"/>
    </Paper>
		</Grid>
	</Grid>
	</div>
);
}
