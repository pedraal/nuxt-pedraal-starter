import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    onConsoleLog(log: string, _) {
      if (log.includes('[plugin @tailwindcss/vite:generate:build]'))
        return false
    },
  },
})
