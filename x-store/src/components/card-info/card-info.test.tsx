import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardInfo } from './card-info';
import { TApiItem } from '../../api/api';
import React from 'react';
const mockCard = {
  birth: '22-09-2023',
  death: 'unlnown',
  gender: 'Female',
  hair: 'Brown',
  height: '170 cm',
  name: 'Jessie',
  race: 'Human',
  realm: 'Midgard',
  spouse: 'None',
  wikiUrl: 'http://ff7.com',
  _id: '347235113049590',
};
const mockCallback = vi.fn((card: TApiItem) => {
  console.log(card);
});
const callbackSetOpened = (opened: boolean) => {
  console.log(opened);
};
describe('component <CardInfo/>', () => {
  test('component renders', () => {
    const component = render(
      <CardInfo card={mockCard} callback={mockCallback} callbackSetOpened={callbackSetOpened} />
    );
    expect(component).toBeTruthy();
    const title = screen.getByText(/jessie/i);
    expect(title).toBeTruthy();
    const descriptionText = screen.getByText(/character/i);
    expect(descriptionText?.textContent).toBeTruthy();
  });
});
