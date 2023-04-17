import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { validateFile } from './validate-file-type';
describe('correct working validate file', () => {
  test('correct working check file type', () => {
    const component = render(
      <>
        <label>attach file</label>
        <input type="file" role="file" />
      </>
    );
    expect(component).toBeTruthy();
    const inputFile = screen.getByRole('file') as HTMLInputElement;
    expect(inputFile).toBeTruthy();
    const file = new File(['jessie'], 'jessie.jpg', {
      type: 'image/jpg',
    });
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(validateFile(inputFile.files!)).toBe(true);
  });
  test('file type incorrect', () => {
    const component = render(
      <>
        <label>attach file</label>
        <input type="file" role="file" />
      </>
    );
    expect(component).toBeTruthy();
    const inputFile = screen.getByRole('file') as HTMLInputElement;
    expect(inputFile).toBeTruthy();
    const file = new File(['jessie'], 'jessie.txt', {
      type: 'text/plain',
    });
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(validateFile(inputFile.files!)).not.toBe(true);
  });
});
