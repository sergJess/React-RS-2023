import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import { CardContainer } from './card-container';
import { fetch } from 'cross-fetch';
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

describe('component <CardContainer/>', async () => {
  test('component renders', async () => {
    const { result } = renderHook(() => {
      const [isErrorResponse, setErrorResponse] = useState(false);
      const [loadingStatus, setLoadingStatus] = useState('loading');
      return [isErrorResponse, setErrorResponse, loadingStatus, setLoadingStatus];
    });
    const isErrorResponse = result.current[0] as boolean;
    const loadingStatus = result.current[2] as string;
    const setLoadingStatus = result.current[3] as (status: string) => void;
    const data = await fetch('http://x-store');
    const component = render(
      <div>
        <CardContainer
          cards={data.json()}
          status={loadingStatus}
          isErrorResponse={isErrorResponse}
          callbackSetStatus={setLoadingStatus}
          callback={() => {}}
          callbackIsCardOpened={() => {}}
        />
      </div>
    );
    expect(component).toBeTruthy();
    expect(screen.getByText(/loading/i)).toBeTruthy();
  });
  test('succesfull fill cards', async () => {
    const { result } = renderHook(() => {
      const [isErrorResponse, setErrorResponse] = useState(false);
      const [loadingStatus, setLoadingStatus] = useState('loaded');
      return [isErrorResponse, setErrorResponse, loadingStatus, setLoadingStatus];
    });
    const isErrorResponse = result.current[0] as boolean;
    const loadingStatus = result.current[2] as string;
    const setLoadingStatus = result.current[3] as (status: string) => void;
    const data = await fetch('http://x-store');
    const component = render(
      <div>
        <CardContainer
          cards={data.json()}
          status={loadingStatus}
          isErrorResponse={isErrorResponse}
          callbackSetStatus={setLoadingStatus}
          callback={() => {}}
          callbackIsCardOpened={() => {}}
        />
      </div>
    );
    expect(component).toBeTruthy();
    await waitFor(() => screen.getByText(/jessie/i));
  });
});
