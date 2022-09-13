import React from 'react';


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
		
		// rework home page to a better style and layout
		// perhaps even use gradients around element borders

		{/* <Box sx={{
		// 	overflow: 'hidden',
		// }} ref={containerRef} >
      	// 	<AppBar position="static">
      	// 	  	<Toolbar>
					
		// 			<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleChange}>
		// 				<ConfCog_svg />
		// 			</IconButton>
					


		// 			{/* ANIMATIONS: */}
		// 			<Slide  direction="right" in={menuOpen} container={containerRef.current}>
		// 				<div>
		// 				<Fade in={menuOpen} timeout={500} mountOnEnter unmountOnExit>
		// 				<ButtonGroup variant="contained" color="secondary" aria-label="Configuration slide in button group">
		// 					<Button>color theme </Button>
		// 					<Button>Behavior</Button>
		// 					<Button>Website info</Button>
		// 				</ButtonGroup>
		// 				</Fade>
		// 				</div>
		// 			</Slide>
					
		// 			<Slide direction="left" in={!menuOpen}  container={containerRef.current}>
		// 			<Fade in={!menuOpen} timeout={500} >
		// 			<ButtonGroup variant="contained" color="secondary" aria-label="text primary button group">
		// 				<Button>Home</Button>
		// 				<Button>Projects</Button>
		// 				<Button>Blog</Button>
		// 				<Button>Contact</Button>
		// 			</ButtonGroup>
		// 			</Fade>
		// 			</Slide>

		// 	  	</Toolbar>
      	// 	</AppBar>
		// </Box> 
	)
}

export default function App() {
	return (
	 <div className = "App">

		{/* TODO: when page loads, display alert warning site is WIP */}
		<ThemeProvider theme={DefaultTheme}>
			{/* <HeadBar /> */}
			<Box sx={{m:1}}></Box>
			<Alert severity="warning">This is website is under development. Some functions might not work as expected.</Alert>
			
			{/* Make a simple blog using a react component. Keep it simply stupid*/}

		</ThemeProvider>

    </div>
  );
}
