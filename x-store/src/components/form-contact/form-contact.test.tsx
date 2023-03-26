import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { FormContact } from './form-contact';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
import { validateDate } from '../../utils/validate/validate-date/validate-date';
import { validateEmail } from '../../utils/validate/validate-email/validate-email';
describe('component <FormContact/>', () => {
  test('component renders', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    expect(screen.getByText(/create card/i)).toBeTruthy();
  });
  test('find 3 inputs with placeholder type here', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    const typeHerePlaceholder = screen.getAllByPlaceholderText(/type here/i);
    expect(typeHerePlaceholder.length).toBeGreaterThanOrEqual(3);
  });
  test('shows messages - is not correct', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    const buttonSubmit = screen.getByText(/create card/i);
    fireEvent.click(buttonSubmit);
    const incorrectMessages = screen.getAllByText(/is not correct/i);
    expect(incorrectMessages.length).toBe(8);
  });
  test('valid date', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    const dateInput = screen.getByRole('input-date') as HTMLInputElement;
    expect(dateInput).toBeTruthy();
    fireEvent.change(dateInput, { target: { value: '2000-2-2' } });
    expect(dateInput.value).toBe('2000-2-2');
    expect(validateDate(dateInput.value)).toBe(true);
  });
  test('valid email', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    const email = screen.getByRole('email') as HTMLInputElement;
    expect(email).toBeTruthy();
    fireEvent.change(email, { target: { value: 'jess@yandex.ru' } });
    expect(validateEmail(email.value)).toBe(true);
  });
  test('valid name', () => {
    const component = render(<FormContact callback={(contactCardProps) => contactCardProps} />);
    expect(component).toBeTruthy();
    const name = screen.getByRole('name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Jessie' } });
    expect(validatePersonal(name.value)).toBe(true);
  });
});
