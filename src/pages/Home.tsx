import { ThemeProvider } from '@emotion/react';
import { AppBar, Box, Button, ButtonGroup, Drawer, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { DefaultTheme } from '../components/theme';

class Main extends React.Component {
  render() {
	return (
		<Box sx={{overflow: "hidden"}}>
			<AppBar position="static">
				<Toolbar>
					<ButtonGroup variant="contained" color="secondary" aria-label="text primary button group">
						<Button onClick={ ()=>window.location.href="/"		   }	> Home		</Button>
						<Button	onClick={ ()=>window.location.href="/contact"  }	> Contact	</Button>
						<Button onClick={ ()=>window.location.href="/about"    } 	> About		</Button>
						<Button onClick={ ()=>window.location.href="/projects" } 	> Projects	</Button>
					</ButtonGroup>
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
