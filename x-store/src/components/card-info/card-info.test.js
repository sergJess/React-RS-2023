import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardInfo } from './card-info';
import React from 'react';
describe('component <CardInfo/>', () => {
  test('component renders', () => {
    const component = render(
      React.createElement(CardInfo, {
        description: 'Album of MIW 2022',
        dislikes: 0,
        id: 1,
        imgSrc: './deathCorp/img.svg',
        likes: 996,
        priceDollar: 55,
        title: 'Motionless in White - Scoring the End of the World',
      })
    );
    expect(component).toBeTruthy();
    const title = screen.getByText('Motionless in White - Scoring the End of the World');
    expect(title).toBeTruthy();
    const descriptionText = screen.getByText('Album of MIW 2022');
    expect(descriptionText?.textContent).toBeTruthy();
  });
});
