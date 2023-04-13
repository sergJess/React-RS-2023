export const SEARCH = 'search';
export type TActionSeacrhBar = {
  type: string;
  payload: string;
};
export const setSearchValue = (value: string): TActionSeacrhBar => {
  return { type: SEARCH, payload: value };
};
