import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Page404 } from './404-page';
describe('component <Page404/>', () => {
  test('component renders', () => {
    render(<Page404 />);
    const page404 = screen.getByRole('404-page');
    expect(page404).toBeTruthy();
  });
});
