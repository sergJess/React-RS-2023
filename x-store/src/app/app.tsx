import React from 'react';
import { Header } from '../components/header/header';
import { Router } from '../router/client-router';
import { Footer } from '../components/footer/footer';
import './styles/base-styles.css';

export const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};
