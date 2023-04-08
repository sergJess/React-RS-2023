import { describe, test, expect, vi } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, renderHook } from '@testing-library/react';
import React, { useState } from 'react';
import { CardContainer } from './card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { TResponseApi } from '../../api/api';

describe('component <CardContainer/>', async () => {
  const server = setupServer(
    rest.get('/mock-resp', (req, res, ctx) => {
      return res(
        ctx.json({
          docs: [
            {
              birth: '',
              death: '',
              gender: 'female',
              hair: 'brown',
              height: '',
              name: 'Jess',
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
  const getData = async () => {
    const response = await fetchData<TResponseApi>('/mock-resp');

    if (response === null) {
      return {
        docs: [
          {
            birth: '',
            death: '',
            gender: '',
            hair: '',
            height: '',
            name: '',
            race: '',
            realm: '',
            spouse: '',
            wikiUrl: '',
            _id: '',
          },
        ],
        limit: 0,
        offset: 0,
        page: 0,
        pages: 0,
        total: 0,
      };
    }
    return response;
  };
  test('component renders', () => {
    const { result } = renderHook(() => {
      const [isErrorResponse, setErrorResponse] = useState(false);
      const [loadingStatus, setLoadingStatus] = useState('loading');
      return [isErrorResponse, setErrorResponse, loadingStatus, setLoadingStatus];
    });
    const isErrorResponse = result.current[0] as boolean;
    const loadingStatus = result.current[2] as string;
    const setLoadingStatus = result.current[3] as (status: string) => void;
    const component = render(
      <div>
        <CardContainer
          cards={getData()}
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
    server.use;
    const { result } = renderHook(() => {
      const [isErrorResponse, setErrorResponse] = useState(false);
      const [loadingStatus, setLoadingStatus] = useState('loaded');
      return [isErrorResponse, setErrorResponse, loadingStatus, setLoadingStatus];
    });
    const isErrorResponse = result.current[0] as boolean;
    const loadingStatus = result.current[2] as string;
    const setLoadingStatus = result.current[3] as (status: string) => void;
    const component = render(
      <div>
        <CardContainer
          cards={getData()}
          status={loadingStatus}
          isErrorResponse={isErrorResponse}
          callbackSetStatus={setLoadingStatus}
          callback={() => {}}
          callbackIsCardOpened={() => {}}
        />
      </div>
    );
    expect(component).toBeTruthy();
    // expect(screen.getByText(/Jess/i)).toBeTruthy();
    console.log(getData().then((data) => data.docs));
  });
});
