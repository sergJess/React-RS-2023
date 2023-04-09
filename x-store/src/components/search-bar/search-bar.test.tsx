import { describe, test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from './search-bar';
const callback = (str: string) => {
  console.log(str);
};
const callbackSetLoading = (str: string) => {
  console.log(str);
};
describe('component <SearchBar/>', () => {
  test('component renders, correct changing value', () => {
    const searchBar = render(
      <SearchBar
        genderParams={React.createRef()}
        callback={callback}
        callbackSetLoading={callbackSetLoading}
      />
    );
    expect(searchBar).toBeTruthy();
    const input = screen.getByRole('search') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      fireEvent.change(input, {
        target: {
          value: 'Jessie',
        },
      });
      expect(input?.value).toBe('Jessie');
    }
  });
});
