import { describe, test, expect } from 'vitest';
import { validateAll } from './validate-all';
type TTestObj = {
  isCorrectName: boolean;
  isCorrectSurname: boolean;
};
describe('correct working validateAll function', () => {
  test('all data correct', () => {
    const testObject = {
      isCorrectName: true,
      isCorrectSurname: true,
    };
    expect(validateAll<TTestObj>(testObject)).toBe(true);
  });
  test('incorrect data', () => {
    const testObject = {
      isCorrectName: true,
      isCorrectSurname: false,
    };
    expect(validateAll<TTestObj>(testObject)).not.toBe(true);
  });
});
