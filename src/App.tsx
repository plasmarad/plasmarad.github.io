import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

import * as MUI from '@mui/material/'
import Button from '@mui/material/Button';

//import theme
import {DefaultTheme} from './assets/theme';

//import svg
import {ConfCog_svg} from './assets/svg_cog521x512';

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


export default function App() {
  return (
    <div className = "App">	
      	<HeadMetadata />

		// todo: research containers and grid

    </div>
  );
}

