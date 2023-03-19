import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Page404 } from './404-page';
describe('component <Page404/>', () => {
  test('component renders', () => {
    render(React.createElement(Page404, null));
    const page404 = screen.getByRole('page-404');
    expect(page404).toBeTruthy();
  });
});
