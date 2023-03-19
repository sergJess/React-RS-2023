import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';
describe('component <Header/> ', () => {
  test('component renders', () => {
    const nav = render(React.createElement(MemoryRouter, null, React.createElement(Header, null)));
    expect(nav).toBeTruthy();
  });
  test('component has text Home and About Us', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(Header, null)));
    const home = screen.getByText('Home');
    expect(home).toBeTruthy();
    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeTruthy();
  });
  test('component has text Store', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(Header, null)));
    const store = screen.getByText('Store');
    expect(store).toBeTruthy();
  });
});
