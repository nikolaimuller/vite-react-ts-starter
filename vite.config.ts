import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [tsconfigPaths(), react()],
    server: {
      proxy: {
        '/api/graphql': process.env.GRAPHQL_API_URL || 'http://localhost:4000',
      },
    },
  })
}
