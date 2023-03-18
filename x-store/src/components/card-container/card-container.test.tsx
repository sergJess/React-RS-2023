import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CardContainer } from './card-container';
import { mockCradsInfo } from '../card-info/card-info';

describe('component <CardContainer/>', () => {
  const component = render(<CardContainer cards={mockCradsInfo} />);
  test('component renders', () => {
    expect(component).toBeTruthy();
    const descriptionText = screen.getByText('Album of MIW 2022');
    expect(descriptionText?.textContent).toBeTruthy();
    const descriptionTextSecond = screen.getByText('Dark Tranquillity - Construct');
    expect(descriptionTextSecond?.textContent).toBeTruthy();
  });
});
