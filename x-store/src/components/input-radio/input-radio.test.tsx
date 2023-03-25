import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { InputRadio } from './input-radio';
describe('component <InputRadio/>', () => {
  test('component renders', () => {
    const refRadioFirst: React.RefObject<HTMLInputElement> = React.createRef();
    const refRadioSecond: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputRadio
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        labelText="Do You want to receive notification about discount promotions,sales, etc:"
        htmlFor="form-contact-radio"
        radios={[
          {
            value: 'Yep',
            textNearRadioClass: 'form-contact__text',
            inputRef: refRadioFirst,
            key: 'radio-1',
          },
          {
            value: 'Nope',
            textNearRadioClass: 'form-contact__text',
            inputRef: refRadioSecond,
            key: 'radio-2',
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
    const text = screen.getByText('Yep');
    expect(text).toBeTruthy();
  });
  test('component checks and ref gets the value', () => {
    const refRadioFirst: React.RefObject<HTMLInputElement> = React.createRef();
    const refRadioSecond: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputRadio
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        labelText="Do You want to receive notification about discount promotions,sales, etc:"
        htmlFor="form-contact-radio"
        radios={[
          {
            value: 'Yep',
            textNearRadioClass: 'form-contact__text',
            inputRef: refRadioFirst,
          },
          {
            value: 'Nope',
            textNearRadioClass: 'form-contact__text',
            inputRef: refRadioSecond,
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
    const radio = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(radio.length).toBe(2);
    const firstRadio = radio[0];
    fireEvent.click(firstRadio);
    expect(firstRadio.checked).toBe(refRadioFirst.current!.checked);
  });
});
