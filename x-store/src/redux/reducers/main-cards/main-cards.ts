import {
  MAINCARDS,
  TActionMainCards,
  MAINCARDSSTATUS,
  TActionMainCardsStatus,
} from '../../actions/main-cards/main-cards';
import { TApiItem } from '../../../api/api';
const initialCards: TApiItem[] = [];
const initialState = {
  mainCards: initialCards,
};
const initialStateStatus = {
  isError: false,
  isLoading: false,
};
export const reducerAddMainCards = (state = initialState, action: TActionMainCards) => {
  if (action.type == MAINCARDS) {
    return { ...state, mainCards: [...action.payload] };
  }
  return state;
};
export const reducerAddMainCardsStatus = (
  state = initialStateStatus,
  action: TActionMainCardsStatus
) => {
  if (action.type == MAINCARDSSTATUS) {
    return { ...state, isError: action.payload.isError, isLoading: action.payload.isLoading };
  }
  return state;
};
