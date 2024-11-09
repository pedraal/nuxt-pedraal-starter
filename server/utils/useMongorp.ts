import { createDatabase, mongorp, type Repositories } from 'mongorp'
import { UserRepository } from '../db/repositories/user.repo'

let repos: Repositories<{
  users: typeof UserRepository
}>
export async function useMongorp() {
  if (!repos) {
    const database = await createDatabase()
    repos = mongorp(database, {
      users: UserRepository,
    })
  }

  return repos
}
