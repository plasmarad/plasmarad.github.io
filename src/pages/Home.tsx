import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Button, Drawer, Link, Toolbar, Typography } from '@mui/material';
import {  Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

import { DefaultTheme } from '../components/theme';

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

export default function Home() {
	return (
	<div className = "Home">

		<ThemeProvider theme={DefaultTheme}>
			<Main />
		</ThemeProvider>
	</div>
	);
}
