import { Request, Response } from 'express';
import { credentialsBody } from '../types/credentialTypes.js';
import * as credentialService from '../services/credentialService.js';

export async function createCredentials(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: credentialsBody = req.body;

  await credentialService.createCredentials(id, body);
  res.status(201).send('Credential created');
}

export async function getCredentials(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;

  const result = await credentialService.getCredentials(id);

  res.status(200).send(result);
}

export async function getCredential(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  const result = await credentialService.getCredential(id, userId);

  res.status(200).send(result);
}
