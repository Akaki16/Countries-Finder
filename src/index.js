import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css';
import CountryDetail from './Components/Countries/CountryDetail.component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/countries' element={<App />} />
      <Route path='/countries/:id' element={<CountryDetail />} />
    </Routes>
  </BrowserRouter>
);