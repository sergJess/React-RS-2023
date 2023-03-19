import { describe, test, expect } from 'vitest';
import { fetchData } from './fetch-data';
describe('fetching data', () => {
  test('fetch data', async () => {
    const url = 'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-cards.json';
    const data = await fetchData(url);
    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});
