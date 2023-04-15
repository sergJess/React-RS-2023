import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainPage } from './main-page';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
describe('component <MainPage/>', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const mainPage = screen.getByRole('main-page');
    expect(mainPage).toBeTruthy();
  });
  test('component renders cards', async () => {
    const component = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
