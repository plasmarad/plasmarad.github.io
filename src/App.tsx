import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className = "App">
      	<HelmetProvider>
        	<Helmet>
          		<title>My website</title>
        	</Helmet>

			<Button variant="contained" color="primary">hi</Button>
      	</HelmetProvider>
    </div>
  );
}

export default App;
