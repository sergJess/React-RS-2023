import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { InputDate } from './input-date';
describe('component <InputDate/>', () => {
  test('component renders', () => {
    const refDate: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputDate
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Select your birthday date:"
        htmlFor="form-contact-date"
        inputRef={refDate}
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByText('Select your birthday date:')).toBeTruthy();
  });
  test('ref correct gets value', () => {
    const refDate: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputDate
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Select your birthday date:"
        htmlFor="form-contact-date"
        inputRef={refDate}
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByText('Select your birthday date:')).toBeTruthy();
    const inputDate = screen.getByDisplayValue('') as HTMLInputElement;
    fireEvent.change(inputDate, { target: { value: '2000-2-2' } });
    expect(refDate.current!.value).toBe('2000-2-2');
  });
});
