import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from './nav';
describe('component <Nav/> ', () => {
  test('component renders', () => {
    const nav = render(
      React.createElement(
        MemoryRouter,
        null,
        React.createElement('div', null, React.createElement(Nav, null))
      )
    );
    expect(nav).toBeTruthy();
  });
  test('component has text Home and About Us', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(Nav, null)));
    const home = screen.getByText('Home');
    expect(home).toBeTruthy();
    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeTruthy();
  });
});
