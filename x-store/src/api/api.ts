export const APIKEY = '_Z3wfuE2NKpUhPlnFVvQ';
export type TApiItem = {
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
  _id: string;
};
export type TResponseApi = {
  docs: TApiItem[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
};
export const intialApiItem = {
  birth: '',
  death: '',
  gender: '',
  hair: '',
  height: '',
  name: '',
  race: '',
  realm: '',
  spouse: '',
  wikiUrl: '',
  _id: '',
};
export const emptyApiResponse = {
  docs: [],
  limit: 0,
  offset: 0,
  page: 0,
  pages: 0,
  total: 0,
};
