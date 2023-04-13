import { TSearchBarState } from '../../../components/search-bar/search-bar';
import { SEARCH, TActionSeacrhBar } from '../../actions/search-bar/search-bar';
const initialSearchBarState: TSearchBarState = {
  searchValue: '',
};
export const reducerSearchBar = (state = initialSearchBarState, action: TActionSeacrhBar) => {
  if (action.type == SEARCH) return { ...state, searchValue: action.payload };
  return state;
};
