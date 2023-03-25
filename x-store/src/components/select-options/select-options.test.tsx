import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SelectOptions } from './select-options';
describe('component <SelectOptions/>', () => {
  test('component renders', () => {
    const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
    const component = render(
      <SelectOptions
        htmlFor="form-contact-estimate"
        optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
        selectRef={selectRef}
        labelText="How can you estimate our store:"
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        firstOptionText="Choose estimate:"
      />
    );
    expect(component).toBeTruthy();
    const label = screen.getByText('How can you estimate our store:');
    expect(label).toBeTruthy();
  });
  test('select gets value from option', () => {
    const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
    const component = render(
      <SelectOptions
        htmlFor="form-contact-estimate"
        optionValues={['Excellent', 'Good', 'Bad', 'Awful']}
        selectRef={selectRef}
        labelText="How can you estimate our store:"
        wrapperClass="form-contact__block"
        labelClass="form-contact__text"
        firstOptionText="Choose estimate:"
      />
    );
    expect(component).toBeTruthy();
    const options = screen.getAllByRole('option') as HTMLOptionElement[];
    expect(options.length).toBeGreaterThan(0);
    const select = selectRef.current!;
    expect(select.value).toMatch('');
    expect(select.value).toBe(options[0].value);
    fireEvent.change(select, { target: { value: 'Good' } });
    expect(select.value).toBe(options[2].value);
  });
});
