import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all variables regardless of the 'VITE_' prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // You can now access your variables using `env.VARIABLE_NAME`
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      strictPort: true,
    }
  }
})
