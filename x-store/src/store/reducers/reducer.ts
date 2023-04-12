import { combineReducers } from '@reduxjs/toolkit';
import { reducerSearchBar } from '../../components/search-bar/searchbar-slice';
export const rootReducer = combineReducers({
  search: reducerSearchBar,
});
