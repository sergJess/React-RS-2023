import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './app/app';
import React from 'react';
type TRouterServer = {
  path: string;
};
export const render = ({ path }: TRouterServer) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
};
