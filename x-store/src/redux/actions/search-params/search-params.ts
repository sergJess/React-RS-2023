export const SEARCHPARAMSGENDER = 'search-params-gender';
export type TActionSearchParamGender = {
  type: string;
  payload: string;
};
export const setSearchParamsGender = (value: string) => {
  return { type: SEARCHPARAMSGENDER, gender: value };
};
