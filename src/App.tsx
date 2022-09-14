import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Button, Drawer, Toolbar } from '@mui/material';
import React from 'react';

import { DefaultTheme } from './components/theme';

class Main extends React.Component {
  render() {
	return (
		<Box sx={{overflow: "hidden"}}>
			<AppBar position="static">
				<Toolbar>
					
				</Toolbar>
			</AppBar>
			
		</Box>
	);
  }
}

export default function App() {
	return (
	<div className = "App">

		<ThemeProvider theme={DefaultTheme}>
			<Main />
		</ThemeProvider>
	</div>
	);
}
