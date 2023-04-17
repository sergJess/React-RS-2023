import React from 'react';
import { ModalWindow } from './modal-window';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
const mockCallback = (openModal: boolean) => {
  console.log(openModal);
};
describe('component <ModalWindow/>', () => {
  test('component renders', () => {
    const component = render(
      <ModalWindow card={mockCard} isOpened={false} callbackCloseModal={mockCallback} />
    );
    expect(component).toBeTruthy();
    const name = screen.getByText(/jessie/i);
    expect(name).toBeTruthy();
  });
});
