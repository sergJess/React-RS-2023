import { describe, test, expect } from 'vitest';
import { fetchData } from './fetch-data';
import { TCardInfoProps } from '../../components/card-info/card-info';

describe('fetching data', () => {
  test('fetch data', async () => {
    const url = 'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-cards.json';
    const data = await fetchData<TCardInfoProps[]>(url);
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
