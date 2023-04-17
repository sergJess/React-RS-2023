import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CardContainer } from './card-container';

import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';

describe('component <CardContainer/>', async () => {
  test('component renders', async () => {
    const component = render(
      <div>
        <Provider store={store}>
          <CardContainer callback={() => {}} callbackIsCardOpened={() => {}} />
        </Provider>
      </div>
    );
    expect(component).toBeTruthy();
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });
  test('succesfull fill cards', async () => {
    const component = render(
      <Provider store={store}>
        <CardContainer callback={() => {}} callbackIsCardOpened={() => {}} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
