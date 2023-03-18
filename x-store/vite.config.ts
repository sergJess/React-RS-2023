/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 18080,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
