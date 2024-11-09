import { type Model, Repository } from 'mongorp'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface User extends Model { }

export class UserRepository extends Repository<User> {
  static collectionName = 'users'
  static override indexes = []
}
