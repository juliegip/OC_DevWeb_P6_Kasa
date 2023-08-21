import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';
import Home from './pages/Home/P_Home';
import About from './pages/About/P_About';
import Header from './components/Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

