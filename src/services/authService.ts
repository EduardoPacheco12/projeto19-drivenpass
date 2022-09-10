import { SignUpBody } from "../types/authTypes.js";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

export async function signUp(body: SignUpBody) {
	const email: string = body.email;
	const password: string = body.password;

	const verifyEmail = await authRepository.verifyEmail(email);
	if(verifyEmail) {
		throw { type: "conflict", message: "Email already exists" };
	}

	const encryptedPassword: string = bcrypt.hashSync(password, 10);

	await authRepository.insertUser(email, encryptedPassword);
}