import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MainPage } from './main-page';
import { CardContainer } from '../../components/card-container/card-container';
import { fetch } from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  rest.get('http://x-store', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            birth: '',
            death: '',
            gender: 'female',
            hair: 'brown',
            height: '',
            name: 'Jessie',
            race: 'Human',
            realm: 'Midgaed',
            spouse: '',
            wikiUrl: '',
            _id: '3479832589',
          },
          {
            birth: '',
            death: '',
            gender: 'male',
            hair: 'blonde',
            height: '',
            name: 'Cloud',
            race: 'Human',
            realm: 'Midgaed',
            spouse: '',
            wikiUrl: '',
            _id: '3479832999',
          },
        ],
        limit: 10,
        offset: 0,
        page: 1,
        pages: 1,
        total: 1,
      })
    );
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('component <MainPage/>', () => {
  test('component renders', () => {
    render(<MainPage />);
    const mainPage = screen.getByRole('main-page');
    expect(mainPage).toBeTruthy();
  });
  test('component renders cards', async () => {
    const data = await fetch('http://x-store');
    const component = render(
      <div className="main-page" role="main-page">
        <CardContainer
          status={'loaded'}
          callbackSetStatus={() => {}}
          callback={() => {}}
          callbackIsCardOpened={() => {}}
          isErrorResponse={false}
          cards={data.json()}
        />
      </div>
    );
    expect(component).toBeTruthy();
    await waitFor(() => screen.getByText(/jessie/i));
    await waitFor(() => screen.getByText(/cloud/i));
  });
});
