import { TContactCardProps } from '../../../components/contact-card/contact-card';
export const CONTACTCARDS = 'contact-cards';
export type TActionContactCards = {
  type: string;
  payload: TContactCardProps;
};
export const setContactCard = (card: TContactCardProps) => {
  return { type: CONTACTCARDS, payload: card };
};
