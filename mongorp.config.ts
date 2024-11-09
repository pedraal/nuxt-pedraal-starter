import { defineMongorpConfig } from 'mongorp'

export default defineMongorpConfig({
  migrationsDir: './server/db/migrations',
  dbUrl: process.env.MONGORP_URL,
})
