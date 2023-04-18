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
      const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      console.log(template);
    } catch {}
  });
  app.listen(9999);
}
createServer();
