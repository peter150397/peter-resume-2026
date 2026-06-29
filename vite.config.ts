import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// Vue
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// tailwindcss
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), tailwindcss()],
    base: '/peter-resume-2026/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
