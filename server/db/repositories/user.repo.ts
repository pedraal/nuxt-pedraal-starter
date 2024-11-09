import { type Model, Repository } from "mongorp";

export interface User extends Model {}

export class UserRepository extends Repository<User> {
	static collectionName = "users";
	static override indexes = [];
}
