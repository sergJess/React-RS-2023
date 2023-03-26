import { describe, test, expect } from 'vitest';
import { validateEmail } from './validate-email';
describe('validate-email', () => {
  test('correct validate, data is correct', () => {
    const testEmail = 'jessie.@gmail.com';
    expect(validateEmail(testEmail)).toBe(true);
  });
  test('correct validate, data is not correct', () => {
    const testEmail = 'jessie.@gmail';
    expect(validateEmail(testEmail)).not.toBe(true);
  });
});
