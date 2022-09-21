import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Home 			from './pages/Home';
import * as Pages 		from './pages/MissingNo';
import Projects 		from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" 			element={<Home 				/>	} />
      <Route path="/contact"  	element={<Pages.WIP_page 	/>	} />
      <Route path="/about"    	element={<Pages.WIP_page 	/> 	} />
      <Route path="/projects" 	element={<Projects 			/>	} />	
      <Route path="*"         	element={<Pages.default 	/>	} />    
	  
	  </Routes>
  </BrowserRouter>

);
