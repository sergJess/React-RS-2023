import { describe, test, expect } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import { SearchBar } from './search-bar';
describe('component <SearchBar/>', () => {
  test('component renders, correct changing value and safe value after unmounting', () => {
    const searchBar = render(<SearchBar name="test" />);
    expect(searchBar).toBeTruthy();
    const input = document.querySelector('.search__input') as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      fireEvent.change(input, {
        target: {
          value: 'Jessie',
        },
      });
      expect(input?.value).toBe('Jessie');
      cleanup;
      render(<SearchBar name="test" />);
      expect(searchBar).toBeTruthy();
      const inputSec = document.querySelector('.search__input') as HTMLInputElement | null;
      if (inputSec) {
        expect(inputSec.value).toBe('Jessie');
      }
    }
  });
});
