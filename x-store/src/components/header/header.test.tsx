import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

describe('component <Header/> ', () => {
  test('component renders', () => {
    const nav = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(nav).toBeTruthy();
  });
  test('component has text Home and About Us', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const home = screen.getByText('Home');
    expect(home).toBeTruthy();
    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeTruthy();
  });
  test('component has text Store', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const store = screen.getByText('Store');
    expect(store).toBeTruthy();
  });
});
