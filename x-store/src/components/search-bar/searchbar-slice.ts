import { stateSearchBar } from './search-bar';
export const SEARCH = 'search';
type actionSeacrhBar = {
  type: string;
  payload: string;
};
const initialSearchBarState: stateSearchBar = {
  searchValue: '',
};

export const reducerSearchBar = (state = initialSearchBarState, action: actionSeacrhBar) => {
  if (action.type == SEARCH) return { ...state, searchValue: action.payload };
  return state;
};

export const setSearchValue = (value: string): actionSeacrhBar => {
  return { type: SEARCH, payload: value };
};
