import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputRadio } from './input-radio';
type TInputRadioTest = {
  radio: string;
};
describe('component <InputRadio/>', () => {
  test('component renders', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TInputRadioTest>();
      const radios = { ...register('radio', { required: true }) };
      return radios;
    });

    const component = render(
      <InputRadio
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        labelText="Do You want to receive notification about discount promotions,sales, etc:"
        register={result.current}
        radios={[
          {
            value: 'Yep',
            textNearRadioClass: 'form-contact__text',
          },
          {
            value: 'Nope',
            textNearRadioClass: 'form-contact__text',
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
    const text = screen.getByText('Yep');
    expect(text).toBeTruthy();
  });
  test('component checks and ref gets the value', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TInputRadioTest>();
      const radios = { ...register('radio', { required: true }) };
      return radios;
    });
    const component = render(
      <InputRadio
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        labelText="Do You want to receive notification about discount promotions,sales, etc:"
        register={result.current}
        radios={[
          {
            value: 'Yep',
            textNearRadioClass: 'form-contact__text',
          },
          {
            value: 'Nope',
            textNearRadioClass: 'form-contact__text',
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
    const radio = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(radio.length).toBe(2);
    const firstRadio = radio[0];
    fireEvent.change(firstRadio, { target: { checked: true } });
    expect(firstRadio.checked).toBe(true);
  });
});
