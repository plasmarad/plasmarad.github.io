import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

import * as MUI from '@mui/material/'
import Button from '@mui/material/Button';

//import theme

import {DefaultTheme} from './theme';

function head() {
  return (
	<HelmetProvider>
		<Helmet>
		  <title>plasmarad.me</title>
		  <meta name="description" content="My description" />
		</Helmet>
	</HelmetProvider>
  );
}

export default function App() {
  return (
    <div className = "App">	
      	{ head() }
		<MUI.ThemeProvider theme={DefaultTheme}>
			<MUI.Divider></MUI.Divider>
		</MUI.ThemeProvider>
    </div>
  );
}

