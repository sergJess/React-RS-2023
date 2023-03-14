import React from 'react';
import { Header } from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main-page/main-page';
import { AboutUsPage } from '../pages/about-us-page/about-us-page';
import { Page404 } from '../pages/404-page/404-page';
import './styles/base-styles.css';
export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}
