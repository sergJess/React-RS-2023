import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './app/app';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducers/reducer';
import { Provider } from 'react-redux';
import { cardsApi } from './redux/api/cards-api';
type TRouterServer = {
  path: string;
};
const storeServer = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(cardsApi.middleware);
  },
});
export const render = ({ path }: TRouterServer) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <Provider store={storeServer}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>
  );
};
export const serverRender = (path: TRouterServer, callback: () => void) => {
  return ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={path.path}>
        <Provider store={storeServer}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>,
    {
      bootstrapScripts: ['./main.tsx'],
      onShellReady() {
        callback();
      },
    }
  );
};
