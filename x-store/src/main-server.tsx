import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Router } from './router/client-router';
import React from 'react';
type TRouterServer = {
  path: string;
};
export const render = ({ path }: TRouterServer) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
};
