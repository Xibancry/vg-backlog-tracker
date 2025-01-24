import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Needed for Docker
    port: 5173,  // Default Vite port
    fs: {
      cachedChecks: false
    },
    watch: {
      usePolling: true  // Needed for Docker on some systems
    }
  }
})
