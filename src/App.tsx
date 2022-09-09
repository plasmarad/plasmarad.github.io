import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';


import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography, Slide, ButtonGroup, Fade, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Alert } from '@mui/material';

//import svg
import {ConfCog_svg} from './assets/svg_cog521x512';
import {DefaultTheme} from './assets/theme';

function HeadBar(props: any){
	{/* set a state for when displaying menu options */}
	const [menuOpen, setMenuOpen] = React.useState(false);
	const containerRef = React.useRef(null);

	const handleChange = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<Box sx={{
			overflow: 'hidden',
		}} ref={containerRef} >
      		<AppBar position="static">
      		  	<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleChange}>
						<ConfCog_svg />
					</IconButton>
					
					{/*TODO: original button group gets dissapeared after configs */}
					


					{/* ANIMATIONS: */}
					<Slide  direction="right" in={menuOpen} container={containerRef.current}>
						<div>
						<Fade in={menuOpen} timeout={500} mountOnEnter unmountOnExit>
						<ButtonGroup variant="contained" color="secondary" aria-label="Configuration slide in button group">
							<Button>Change color theme </Button>
							<Button>Behavior</Button>
							<Button>Website info</Button>
						</ButtonGroup>
						</Fade>
						</div>
					</Slide>
			  	</Toolbar>
      		</AppBar>
		</Box>
	)
}

export default function App() {
	const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
	 <div className = "App">	


		{/* TODO: when page loads, display alert warning site is WIP */}
		<ThemeProvider theme={DefaultTheme}>
		
			<HeadBar />

			<Alert severity="warning">This is website is under development. Some functions might not work as expected.</Alert>

		</ThemeProvider>

    </div>
  );
}
