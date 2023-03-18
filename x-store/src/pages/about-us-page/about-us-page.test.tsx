import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutUsPage } from './about-us-page';
describe('component <AboutUsPage/>', () => {
  test('component renders', () => {
    render(<AboutUsPage />);
    const aboutUsPage = screen.getByRole('about-us-page');
    expect(aboutUsPage).toBeTruthy();
  });
});
