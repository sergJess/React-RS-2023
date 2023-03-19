import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './app';
describe('component <App/>', () => {
  test('component renders', () => {
    const app = render(React.createElement(MemoryRouter, null, React.createElement(App, null)));
    expect(app).toBeTruthy();
  });
  test('shows page About Us', () => {
    render(React.createElement(MemoryRouter, null, React.createElement(App, null)));
    const aboutUsLink = screen.getByText('About Us');
    if (aboutUsLink) {
      fireEvent.click(aboutUsLink);
      const aboutUsPage = screen.getByRole('about-us-page');
      expect(aboutUsPage).toBeTruthy();
    }
  });
});
