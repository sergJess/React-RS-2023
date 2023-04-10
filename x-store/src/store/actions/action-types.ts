import {
  stateSearchBar,
  setSearchValue,
  SEACRH,
  actionSearchBar,
} from '../../store/actions/search-bar/search-bar';
export const reducerSeacrhBar = (
  state: stateSearchBar,
  action: actionSearchBar
): stateSearchBar => {
  if (action.type == SEACRH) {
    return { ...state, value: action.value };
  }
  return state;
};
