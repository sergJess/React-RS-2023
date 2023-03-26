import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ContactCard } from './contact-card';
describe('component <СontactCard', () => {
  test('component renders', () => {
    const component = render(
      <ContactCard
        name="Jessie"
        surname="Rainstone"
        fileUrl=""
        estimate="Good"
        radio="Yep"
        date="2000-11-11"
        email="miw@gmail.com"
      />
    );
    expect(component).toBeTruthy();
    const name = screen.getByText(/jessie/i);
    expect(name).toBeTruthy();
    const estimate = screen.getByText(/good/i);
    expect(estimate).toBeTruthy();
  });
});
