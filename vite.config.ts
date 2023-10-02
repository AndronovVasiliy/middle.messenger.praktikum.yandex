import { defineConfig, Plugin } from "vite";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        handlebars() as Plugin
    ],
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                relativeUrls: true,
                javascriptEnabled: true,
            },
        },
    },
});
