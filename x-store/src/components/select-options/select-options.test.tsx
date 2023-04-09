import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SelectOptions } from './select-options';
type TSelectOptionsTest = {
  select: string;
};
describe('component <SelectOptions/>', () => {
  test('component renders', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TSelectOptionsTest>();
      const naming = { ...register('select', { required: true }) };
      return naming;
    });
    const component = render(
      <SelectOptions
        optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
        labelText="How can you estimate our store:"
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        firstOptionText="Choose estimate:"
        register={result.current}
      />
    );
    expect(component).toBeTruthy();
    const label = screen.getByText('How can you estimate our store:');
    expect(label).toBeTruthy();
  });
  test('select gets value from option', () => {
    const { result } = renderHook(() => {
      const { register } = useForm<TSelectOptionsTest>();
      const naming = { ...register('select', { required: true }) };
      return naming;
    });
    const component = render(
      <SelectOptions
        register={result.current}
        optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
        labelText="How can you estimate our store:"
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        firstOptionText="Choose estimate:"
      />
    );
    expect(component).toBeTruthy();
    const options = screen.getAllByRole('option') as HTMLOptionElement[];
    expect(options.length).toBeGreaterThan(0);
    const selectElem = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectElem).toBeTruthy();
    expect(selectElem.value).toMatch('');
    expect(selectElem.value).toBe(options[0].value);
    fireEvent.change(selectElem, { target: { value: 'Good' } });
    expect(selectElem.value).toBe(options[2].value);
  });
});
