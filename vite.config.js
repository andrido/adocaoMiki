import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/nome-do-seu-repositorio/', // 👈 adicione o nome exato do seu repositório aqui!
});