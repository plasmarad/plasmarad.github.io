import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';


import { AppBar, Box, Button, Container, IconButton, ThemeProvider, Toolbar, Typography, Slide, ButtonGroup } from '@mui/material';

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

function AnimateAppBar(props:any) {
	return (
		<Slide direction="right" in={props.MenuOpen} mountOnEnter unmountOnExit>
			<ButtonGroup variant="text" color="secondary" aria-label="Configuration slide in button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</Slide>
	)

}

function HeadBar(props: any){
	{/* set a state for when displaying menu options */}
	const [menuOpen, setMenuOpen] = React.useState(false);
	
	const handleChange = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
      		<AppBar position="static">
				<Container maxWidth="lg">
      		  	<Toolbar>
				
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleChange}>
						<ConfCog_svg />
					</IconButton>
					<AnimateAppBar MenuOpen={menuOpen}  />


			  	</Toolbar>
			</Container>
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
