import { configureStore } from '@reduxjs/toolkit';
import { searchBarReducer } from '../components/search-bar/search-reducer';
export const store = configureStore({
  reducer: {
    searchBarReducer: searchBarReducer,
  },
});
