import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ReactDOMServer from 'react-dom/server';
import { createServer as createViteServer } from 'vite';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { serverRender } from './src/main-server';
import { App } from './src/app/app';
import { StaticRouter } from 'react-router-dom/server';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
  const app = express();
  const server = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(server.middlewares);
  app.use('*', async (req, res) => {
    try {
      const { pipe } = ReactDOMServer.renderToPipeableStream(
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="./src/assets/icons/logo/x.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>X-Store</title>
          </head>
          <body>
            <div id="root">
              <React.StrictMode>
                <StaticRouter location={{ pathname: '/' }}>
                  <Provider store={store}>
                    <App />
                  </Provider>
                </StaticRouter>
              </React.StrictMode>
            </div>
          </body>
        </html>,
        {
          bootstrapModules: ['./src/main.tsx'],
          onShellReady() {
            res.setHeader('content-type', 'text/html');
            pipe(res);
          },
        }
      );
    } catch (e: unknown) {
      server.ssrFixStacktrace(e as Error);
    }
  });

  app.listen(9999, () => {
    console.log(`App is listening on http://localhost:9999`);
  });
}
createServer();
