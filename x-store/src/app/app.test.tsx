import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './app';
describe('component <App/>', () => {
  test('component renders', () => {
    const app = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(app).toBeTruthy();
  });
  test('shows page About Us', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const aboutUsLink = screen.getByText('About Us');
    if (aboutUsLink) {
      fireEvent.click(aboutUsLink);
      const aboutUsPage = screen.getByRole('about-us-page');
      expect(aboutUsPage).toBeTruthy();
    }
  });
});
