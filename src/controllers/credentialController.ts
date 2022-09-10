import { Request, Response } from "express";
import { credentialsBody } from "../types/credentialTypes.js";
import * as credentialService from "../services/credentialService.js";

export async function createCredentials(req: Request, res: Response) {
	const { id }: {id: number} = res.locals.id;
	const body: credentialsBody = req.body;

	await credentialService.createCredentials(id, body);
	res.status(201).send("Credential created");
}

export async function getCredencials(req: Request, res: Response) {
	const { id }: {id: number} = res.locals.id;

	const result = await credentialService.getCredencials(id);

	res.status(200).send(result);
}