import { defineConfig } from 'vite';
import html from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    html({
      inject: {
        injectData: {
          title: 'patty Website Title', // Default title
        },
      },
    }),
  ],
});
