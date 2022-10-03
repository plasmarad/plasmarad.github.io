import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { DefaultTheme } from '../components/theme';
import { Headbar } 		from '../components/Headbar';


export default function Home() {
	return (
	<div className = "Home">
		<ThemeProvider theme={DefaultTheme}>
			<Headbar />
		</ThemeProvider>
	</div>
	);
}
