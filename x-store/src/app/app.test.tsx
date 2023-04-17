import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
describe('component <App/>', () => {
  test('component renders', () => {
    const app = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(app).toBeTruthy();
  });
  test('shows page About Us', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const aboutUsLink = screen.getByText('About Us');
    if (aboutUsLink) {
      fireEvent.click(aboutUsLink);
      const aboutUsPage = screen.getByRole('about-us-page');
      expect(aboutUsPage).toBeTruthy();
    }
  });
});
