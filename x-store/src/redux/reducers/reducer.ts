import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearchBar } from '../reducers/search-bar/search-bar';
import { reducerAddContactCard } from '../reducers/contact-cards/contact-cards';
import { cardsApi } from '../api/cards-api';
export const rootReducer = combineReducers({
  search: reducerSearchBar,
  contactCards: reducerAddContactCard,
  [cardsApi.reducerPath]: cardsApi.reducer,
});
