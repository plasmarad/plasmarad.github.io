import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';


import { AppBar, Box, Button, Container, IconButton, ThemeProvider, Toolbar, Typography, Slide, ButtonGroup, Fade } from '@mui/material';

//import svg
import {ConfCog_svg} from './assets/svg_cog521x512';
import {DefaultTheme} from './assets/theme';

function HeadMetadata(props:any) {
  return (
	<HelmetProvider>
		<Helmet>
		  <title>plasmarad.me</title>
		  <meta name="description" content="My description" />
		</Helmet>
	</HelmetProvider>
  );
}



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
					<Slide  direction="right" in={menuOpen} container={containerRef.current}>
						
						<div>
						<Fade in={menuOpen} timeout={750}>
						<ButtonGroup variant="outlined" color="secondary" aria-label="Configuration slide in button group">
							<Button>One</Button>
							<Button>Two</Button>
							<Button>Three</Button>
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
  return (
    <div className = "App">	
      	<HeadMetadata />

		<ThemeProvider theme={DefaultTheme}>
			<HeadBar />
		</ThemeProvider>

    </div>
  );
}
