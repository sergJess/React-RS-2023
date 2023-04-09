import { describe, test, expect } from 'vitest';
import { validateDate } from './validate-date';

describe('works correct validateDate', () => {
  test('correct date', () => {
    const testDate = '2000-2-10';
    expect(validateDate(testDate)).toBe(true);
  });
  test('incorrect date', () => {
    const testDate = '2035-2-10';
    expect(validateDate(testDate)).toBe(false);
  });
});
