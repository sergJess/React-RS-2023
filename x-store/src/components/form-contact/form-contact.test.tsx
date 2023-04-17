import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { FormContact } from './form-contact';
import { validatePersonal } from '../../utils/validate/validate-personal/validate-personal';
import { validateDate } from '../../utils/validate/validate-date/validate-date';
import { validateEmail } from '../../utils/validate/validate-email/validate-email';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import { Blob } from 'node:buffer';
import filing from '../../assets/mock-cards/miw-scoring.jpg';
describe('component <FormContact/>', () => {
  test('component renders', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    expect(screen.getByText(/create card/i)).toBeTruthy();
  });
  test('find 3 inputs with placeholder type here', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const typeHerePlaceholder = screen.getAllByPlaceholderText(/type here/i);
    expect(typeHerePlaceholder.length).toBeGreaterThanOrEqual(3);
  });
  test('shows messages - is not correct', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const buttonSubmit = screen.getByText(/create card/i);
    fireEvent.click(buttonSubmit);
    const incorrectMessages = screen.getAllByText(/is not correct/i);
    expect(incorrectMessages.length).toBe(8);
  });
  test('valid date', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const dateInput = screen.getByRole('input-date') as HTMLInputElement;
    expect(dateInput).toBeTruthy();
    fireEvent.change(dateInput, { target: { value: '2000-2-2' } });
    expect(dateInput.value).toBe('2000-2-2');
    expect(validateDate(dateInput.value)).toBe(true);
  });
  test('valid email', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const email = screen.getByRole('email') as HTMLInputElement;
    expect(email).toBeTruthy();
    fireEvent.change(email, { target: { value: 'jess@yandex.ru' } });
    expect(validateEmail(email.value)).toBe(true);
  });
  test('valid name', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const name = screen.getByRole('name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Jessie' } });
    expect(validatePersonal(name.value)).toBe(true);
  });
  test('consent data exists', () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    expect(screen.getByText('I consent to my personal data:')).toBeTruthy();
  });
  test('full component', async () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const inputName = screen.getByRole('name') as HTMLInputElement;
    expect(inputName).toBeTruthy();
    fireEvent.change(inputName, { target: { value: 'Jessie' } });
    expect(inputName.value).toBe('Jessie');
    const inputSurname = screen.getByRole('surname') as HTMLInputElement;
    expect(inputSurname).toBeTruthy();
    fireEvent.change(inputSurname, { target: { value: 'Jess' } });
    expect(inputSurname.value).toBe('Jess');
    const date = screen.getByRole('input-date') as HTMLInputElement;
    expect(date).toBeTruthy();
    fireEvent.change(date, { target: { value: '1-1-2000' } });
    expect(date.value).toBe('1-1-2000');
    const radios = screen.getAllByRole('radio');
    expect(radios.length).toBeTruthy();
    const radio = radios[0];
    fireEvent.change(radio, { target: { checked: true } });
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select).toBeTruthy();
    fireEvent.change(select, { target: { value: 'Good' } });
    expect(select.value).toBe('Good');
    const file = screen.getByRole('input-file');
    expect(file).toBeTruthy();
    const fileMock = new Blob([filing], { type: 'image/png' });
    waitFor(() => {
      fireEvent.change(file, { target: { files: [fileMock] } });
    });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeTruthy();
    fireEvent.change(checkbox, { target: { checked: true } });
    const submitBtn = screen.getByText(/create card/i);
    expect(submitBtn).toBeTruthy();
    const form = screen.getByRole('form');
    expect(form).toBeTruthy();
  });
  test('overlay exists', async () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const overlay = screen.getByText(/your data has been safed/i);
    expect(overlay).toBeTruthy();
    const overlayBtn = screen.getByText('Ok');
    expect(overlayBtn).toBeTruthy();
  });
  test('check validation', async () => {
    const component = render(
      <Provider store={store}>
        <FormContact />
      </Provider>
    );
    expect(component).toBeTruthy();
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    const errors = screen.getAllByText(/is not correct/i);
    expect(errors.length).toBe(8);
  });
});
