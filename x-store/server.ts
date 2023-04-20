import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
  const app = express();
  const server = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(server.middlewares);
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await server.transformIndexHtml(url, template);
      const devBuildPath = path.join(__dirname, './src/main-server.tsx');
      const { render } = await server.ssrLoadModule(devBuildPath);

      const appHtml = await render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: unknown) {
      server.ssrFixStacktrace(e as Error);
    }
  });

  app.listen(9999, () => {
    console.log(`App is listening on http://localhost:9999`);
  });
}
createServer();
