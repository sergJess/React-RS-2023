import { createSlice } from '@reduxjs/toolkit';
import { stateSearchBar } from './search-bar';
type actionSeacrhBar = {
  type: string;
  payload: string;
};
const initialSearchBarState: stateSearchBar = {
  value: '',
};

export const reducerSearchBar = (state = initialSearchBarState, action: actionSeacrhBar) => {
  switch (action.type) {
    case 'search':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
