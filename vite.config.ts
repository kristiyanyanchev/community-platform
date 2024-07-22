import { vitePlugin as remix } from '@remix-run/dev'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import envCompatible from 'vite-plugin-env-compatible'
import svgr from 'vite-plugin-svgr'
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths'

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    teardownTimeout: 15000,
    testTimeout: 15000,
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
    include: ['./src/**/*.test.?(c|m)[jt]s?(x)'],
    logHeapUsage: true,
    sequence: {
      hooks: 'list',
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  define: {
    global: 'globalThis',
  },
  plugins: [
    remix({
      appDirectory: './src',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    // TODO - confirm if required (given manual resolutions below)
    ViteTsConfigPathsPlugin({
      root: './',
    }),
    // support import of svg files
    svgr(),
    // support REACT_APP variables accessed via process.env
    envCompatible({ prefix: 'REACT_APP_' }),
  ],
  // open browser with server (note, will open at 127.0.1 not localhost on node <17)
  // https://vitejs.dev/config/server-options.html#server-options
  server: {
    open: '/',
    port: 3000,
    host: 'localhost',
  },
  ssr: {
    noExternal: ['remix-utils'],
  },
  resolve: {
    alias: {
      'oa-shared': resolve(__dirname, './shared/index.ts'),
      'oa-components': resolve(__dirname, './packages/components/src/index.ts'),
    },
  },
  test: vitestConfig.test,
})
