import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormIncorrect } from './form-incorrect';
describe('compoent <FormIncorrect/>', () => {
  test('component renders', () => {
    const component = render(
      <FormIncorrect
        isNotActive={true}
        component={
          <>
            <div>Jessie</div>
          </>
        }
      />
    );
    expect(component).toBeTruthy();
    expect(screen.getByText(/jessie/i)).toBeTruthy();
  });
});
