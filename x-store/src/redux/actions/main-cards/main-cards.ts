import { TApiItem } from '../../../api/api';
export const MAINCARDS = 'main-cards';
export const MAINCARDSSTATUS = 'main-cards-status';
export type TActionMainCards = {
  type: string;
  payload: TApiItem[];
};
export type TMainCardsStatus = {
  isError: boolean;
  isLoading: boolean;
};
export type TActionMainCardsStatus = {
  type: string;
  payload: TMainCardsStatus;
};
export const setMainCards = (cards: TApiItem[]) => {
  return { type: MAINCARDS, payload: [...cards] };
};
export const setMainCardsStatus = (status: TMainCardsStatus) => {
  return { type: MAINCARDSSTATUS, payload: status };
};
