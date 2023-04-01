import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import React from 'react';
import { InputDate } from './input-date';
import { validateDate } from '../../utils/validate/validate-date/validate-date';
type tInputDateTest = {
  date: string;
};
describe('component <InputDate/>', () => {
  test('component renders', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<tInputDateTest>();
      const naming = { ...register('date', { required: true }) };
      return naming;
    });
    const component = render(
      <InputDate
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Select your birthday date:"
        htmlFor="form-contact-date"
        register={result.current}
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByText('Select your birthday date:')).toBeTruthy();
  });
  test('changes value', () => {
    const { result } = renderHook(() => {
      const { register, getFieldState } = useForm<tInputDateTest>();
      const naming = { ...register('date', { required: true, validate: validateDate }) };
      return { name: naming, fieldState: getFieldState };
    });
    const component = render(
      <InputDate
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Select your birthday date:"
        htmlFor="form-contact-date"
        register={result.current.name}
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByText('Select your birthday date:')).toBeTruthy();
    const inputDate = screen.getByDisplayValue('') as HTMLInputElement;
    fireEvent.change(inputDate, { target: { value: '2000-2-2' } });
    expect(inputDate.value).toBe('2000-2-2');
    expect(result.current.fieldState('date').invalid).toBeFalsy();
  });
});
