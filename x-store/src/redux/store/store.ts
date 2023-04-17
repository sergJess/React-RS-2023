import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/reducer';
import { cardsApi } from '../api/cards-api';
export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(cardsApi.middleware);
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
