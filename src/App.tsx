import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';



export default function Main() {
  return (
    <div className = "App">
      	<HelmetProvider>
        	<Helmet>
          		<title>plasmarad.me</title>
        	</Helmet>

		</HelmetProvider>
    </div>
  );
}
