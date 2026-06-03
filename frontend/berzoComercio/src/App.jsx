import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import './global.scss';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
