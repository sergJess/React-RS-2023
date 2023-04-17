import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TResponseApi, APIKEY } from '../../api/api';
export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${APIKEY}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getCards: build.query<TResponseApi, string>({
      query: () => 'character?&&limit=20',
    }),
    getCardsByName: build.query<TResponseApi, string>({
      query: (name: string) => {
        return `character?name=/${name}/i`;
      },
    }),
  }),
});
export const { useGetCardsQuery } = cardsApi;
export const { useGetCardsByNameQuery } = cardsApi;
