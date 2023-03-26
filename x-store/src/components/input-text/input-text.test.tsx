import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { InputText } from './input-text';
describe('component <InputText/>', () => {
  test('component renders', () => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputText
        htmlFor="test-input"
        inputRef={ref}
        placeholder="type..."
        labelText="test input"
        wrapperClass="test"
        labelClass="test"
        inputClass="test"
        role="name"
      />
    );
    expect(component).toBeTruthy();
    const labelText = screen.getByText('test input');
    expect(labelText).toBeTruthy();
  });
  test('get value by ref', () => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    const component = render(
      <InputText
        htmlFor="test-input"
        inputRef={ref}
        placeholder="type..."
        labelText="test input"
        wrapperClass="test"
        labelClass="test"
        role="name"
        inputClass="test"
      />
    );
    expect(component).toBeTruthy();
    const inputText = screen.getByPlaceholderText('type...');
    expect(inputText).toBeTruthy();
    fireEvent.change(inputText, { target: { value: 'Jessie' } });
    const value = ref.current!.value;
    expect(value).toBe('Jessie');
  });
});
