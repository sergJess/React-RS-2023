import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearchBar } from '../reducers/search-bar/search-bar';
import { reducerAddContactCard } from '../reducers/contact-cards/contact-cards';
import { reducerAddMainCards, reducerAddMainCardsStatus } from '../reducers/main-cards/main-cards';
import { cardsApi } from '../api/cards-api';
export const rootReducer = combineReducers({
  search: reducerSearchBar,
  contactCards: reducerAddContactCard,
  mainCards: reducerAddMainCards,
  mainCardsStatus: reducerAddMainCardsStatus,
  [cardsApi.reducerPath]: cardsApi.reducer,
});
