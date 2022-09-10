import { client } from "../databases/postgres.js";

export async function verifyTitleByUserId(title: string, userId: number) {
	return await client.credentials.findUnique({
		where: {
			title_userId: {
				userId, 
				title 
			}
		}
	});
}

export async function insertCredential(title: string, url: string, userName: string, password: string, userId: number) {
	return await client.credentials.create({
		data: {
			title,
			url,
			userName,
			password,
			userId
		}
	})
}