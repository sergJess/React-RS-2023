import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { Blob } from 'buffer';
import { ContactUs } from './contact-us';
describe('component <ContactUs/>', () => {
  test('component renders', () => {
    const component = render(<ContactUs />);
    expect(component).toBeTruthy();
    expect(screen.getByText(/please touch the contact with us/i)).toBeTruthy();
  });
  test('form exists and changes', async () => {
    const component = render(<ContactUs />);
    expect(component).toBeTruthy();
    await act(async () => {
      const name = screen.getByRole('name') as HTMLInputElement;
      expect(name).toBeTruthy();
      fireEvent.change(name, { target: { value: 'Jessie' } });
      expect(name.value).toBe('Jessie');
      const surname = screen.getByRole('surname') as HTMLInputElement;
      expect(surname).toBeTruthy();
      fireEvent.change(surname, { target: { value: 'Jex' } });
      const email = screen.getByRole('email');
      expect(email).toBeTruthy();
      fireEvent.change(email, { target: { value: 'fantasy@gmail.com' } });
      const date = screen.getByRole('input-date');
      expect(date).toBeTruthy();
      fireEvent.change(date, { target: { value: '1997-2-2' } });
      const radios = screen.getAllByRole('radio') as HTMLInputElement[];
      expect(radios.length).toBe(2);
      fireEvent.change(radios[0], { target: { checked: true } });
      expect(radios[0].checked).toBe(true);
      const options = screen.getAllByRole('option') as HTMLOptionElement[];
      expect(options.length).toBeGreaterThan(2);
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select).toBeTruthy();
      fireEvent.change(select, { target: { value: 'Good' } });
      expect(select.value).toBe('Good');
      const file = screen.getByRole('input-file') as HTMLInputElement;
      expect(file).toBeTruthy();
      const testFile = new Blob(['jessie.jpg'], {
        type: 'image/jpg',
      });
      fireEvent.change(file, { target: { files: [testFile] } });
      expect(file.files!.length).toBe(1);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox).toBeTruthy();
      fireEvent.change(checkbox, { target: { checked: true } });
      expect(checkbox.checked).toBe(true);
    });
  });
});
