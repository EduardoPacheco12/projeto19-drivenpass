import { client } from "../databases/postgres.js";

//Sign Up

export async function verifyEmail(email: string) {
	return await client.users.findUnique({
		where: {
			email: email
		}
	});
}

export async function insertUser(email: string, password: string) {
	return await client.users.create({
		data: {
			email,
			password
		}
	})
}

//Sign In