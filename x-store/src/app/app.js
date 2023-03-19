import React from 'react';
import { Header } from '../components/header/header';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main-page/main-page';
import { AboutUsPage } from '../pages/about-us-page/about-us-page';
import { Page404 } from '../pages/404-page/404-page';
import './styles/base-styles.css';
export class App extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(MainPage, null) }),
        React.createElement(Route, {
          path: '/about-us',
          element: React.createElement(AboutUsPage, null),
        }),
        React.createElement(Route, { path: '*', element: React.createElement(Page404, null) })
      )
    );
  }
}
