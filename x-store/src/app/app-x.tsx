import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { App } from './app';
import './styles/base-styles.css';

export const AppX = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>X-Store</title>
      </head>
      <body>
        <div id="root">
          <Header />
          <Footer />
        </div>
      </body>
    </html>
  );
};
