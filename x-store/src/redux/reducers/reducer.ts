import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearchBar } from '../reducers/search-bar/search-bar';
import { reducerAddContactCard } from '../reducers/contact-cards/contact-cards';
import { reducerAddMainCards, reducerAddMainCardsStatus } from '../reducers/main-cards/main-cards';
import { cardsApi } from '../api/cards-api';
import { reducerSearchParams } from '../reducers/search-params/search-params';
export const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  search: reducerSearchBar,
  searchParams: reducerSearchParams,
  contactCards: reducerAddContactCard,
  mainCards: reducerAddMainCards,
  mainCardsStatus: reducerAddMainCardsStatus,
});
