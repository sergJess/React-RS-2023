import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearchBar } from '../reducers/search-bar/search-bar';
import { reducerAddContactCard } from '../reducers/contact-cards/contact-cards';
export const rootReducer = combineReducers({
  search: reducerSearchBar,
  contactCards: reducerAddContactCard,
});
