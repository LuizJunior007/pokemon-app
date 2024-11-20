import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Layout from './components/Layout';
import Pokemon from './pages/Pokemon';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/pokemon/:id' Component={Pokemon} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

