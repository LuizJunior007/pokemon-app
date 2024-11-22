import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/custom.scss';
import './styles/main.css';
import Layout from './components/Layout';
import Pokemon from './pages/Pokemon';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/pokemon/:id' Component={Pokemon} />
          <Route path='*' Component={NotFound} />
          <Route path='/sobre' Component={About} />
          <Route path='/contato' Component={Contact} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

