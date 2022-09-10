import { credentialsBody, credentialsPrismaSchema } from "../types/credentialTypes";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { encrypt } from "../utils/cryptrUtils.js";

export async function createCredentials(userId: number, body: credentialsBody) {
	const title: string = body.title;
	const url: string = body.url;
	const userName: string = body.userName;
	const password: string = body.password;

	const verifyTitleByUserId: credentialsPrismaSchema = await credentialRepository.verifyTitleByUserId(title, userId);
	if(verifyTitleByUserId) {
		throw { type: "unauthorized", message: "A credential with that title already exists, try again"}
	}
	const encryptPassword: string = await encrypt(password);

	await credentialRepository.insertCredential(title, url, userName, encryptPassword, userId)

}