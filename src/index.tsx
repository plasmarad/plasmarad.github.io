import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import MissingNo from './pages/MissingNo';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<MissingNo />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>

);

