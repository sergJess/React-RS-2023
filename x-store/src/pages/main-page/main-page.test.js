import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainPage } from './main-page';
describe('component <MainPage/>', () => {
  test('component renders', () => {
    render(React.createElement(MainPage, null));
    const mainPage = screen.getByRole('main-page');
    expect(mainPage).toBeTruthy();
  });
});
