import {
  TActionSearchParamGender,
  SEARCHPARAMSGENDER,
} from '../../actions/search-params/search-params';
const initialState = {
  gender: 'Both',
};
export const reducerSearchParams = (state = initialState, action: TActionSearchParamGender) => {
  if (action.type == SEARCHPARAMSGENDER) {
    return { ...state, gender: action.payload };
  }
  return state;
};
