import { describe, test, expect } from 'vitest';
import { validatePersonal } from './validate-personal';
describe('correct validate', () => {
  test('validate string', () => {
    const testString = 'Jessie';
    expect(validatePersonal(testString)).toBe(true);
  });
  test('incorrect string', () => {
    const testString = 'Jessie1997';
    expect(validatePersonal(testString)).not.toBe(true);
  });
  test('incorrect string because of first letter', () => {
    const testString = 'jessie';
    expect(validatePersonal(testString)).not.toBe(true);
  });
  test('correct string with spaces in the end', () => {
    const testString = 'Jess   ';
    expect(validatePersonal(testString)).toBe(true);
  });
});
