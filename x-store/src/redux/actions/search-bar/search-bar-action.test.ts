import { describe, test, expect } from 'vitest';
import { setSearchValue, SEARCH } from './search-bar';
describe('action setSearchValue', () => {
  test('return correct type', () => {
    const result = setSearchValue('Jessie');
    expect(result.type).toBe(SEARCH);
  });
  test('return correct value', () => {
    const result = setSearchValue('Jessie');
    expect(result.payload).toBe('Jessie');
  });
});
