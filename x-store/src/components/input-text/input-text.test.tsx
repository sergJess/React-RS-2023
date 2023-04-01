import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from './input-text';
type TInputTextTest = {
  name: string;
};
describe('component <InputText/>', () => {
  test('component renders', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TInputTextTest>();
      const naming = { ...register('name', { required: true }) };
      return naming;
    });

    const component = render(
      <InputText
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Type your name:"
        htmlFor="inactive"
        role="name"
        placeholder="type here"
        register={result.current}
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByRole('name')).toBeTruthy();
  });
  test('get value by ref', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TInputTextTest>();
      const naming = { ...register('name', { required: true }) };
      return naming;
    });
    const component = render(
      <InputText
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        inputClass="form-contact__input-text"
        labelText="Type your name:"
        htmlFor="inactive"
        role="name"
        placeholder="type here"
        register={result.current}
      />
    );
    expect(component).toBeTruthy();
    const inputText = screen.getByPlaceholderText('type here') as HTMLInputElement;
    expect(inputText).toBeTruthy();
    fireEvent.change(inputText, { target: { value: 'Jessie' } });
    expect(inputText.value).toBe('Jessie');
  });
});
