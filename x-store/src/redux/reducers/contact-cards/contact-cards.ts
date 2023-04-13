import { TContactCardProps } from '../../../components/contact-card/contact-card';
import { TActionContactCards, CONTACTCARDS } from '../../actions/contact-cards/contact-cards';
const initialCards: TContactCardProps[] = [];
const intialState = {
  contactCards: initialCards,
};
export const reducerAddContactCard = (state = intialState, action: TActionContactCards) => {
  if (action.type == CONTACTCARDS)
    return { ...state, contactCards: [...state.contactCards, action.payload] };
  return state;
};
