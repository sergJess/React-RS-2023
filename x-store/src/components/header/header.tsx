import React from 'react';
import { Nav } from '../nav/nav';
import './header.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { AboutUsPage } from '../../pages/about-us-page/about-us-page';
import { Page404 } from '../../pages/404-page/404-page';
import { ContactUs } from '../../pages/contact-us/contact-us';
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">Store</div>
        <Nav />
      </header>
      {typeof window !== 'undefined' && (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
    </>
  );
};
