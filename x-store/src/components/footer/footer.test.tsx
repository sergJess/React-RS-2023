import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from './footer';
describe('componetn <Footer/>', () => {
  test('component renders', () => {
    const component = render(<Footer />);
    expect(component).toBeTruthy();
  });
  test('gets img', () => {
    const component = render(<Footer />);
    expect(component).toBeTruthy();
    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
  });
});
