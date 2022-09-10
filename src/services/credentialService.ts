import { credentialsBody, credentialsPrismaSchema } from '../types/credentialTypes';
import * as credentialRepository from '../repositories/credentialRepository.js';
import { decrypt, encrypt } from '../utils/cryptrUtils.js';

export async function createCredentials(userId: number, body: credentialsBody) {
  const title: string = body.title;
  const url: string = body.url;
  const userName: string = body.userName;
  const password: string = body.password;

  const verifyTitleByUserId: credentialsPrismaSchema = await credentialRepository.getTitleByUserId(title, userId);
  if (verifyTitleByUserId) {
    throw { type: 'unauthorized', message: 'A credential with that title already exists, try again' };
  }
  const encryptPassword: string = await encrypt(password);

  await credentialRepository.insertCredential(title, url, userName, encryptPassword, userId);
}

export async function getCredentials(userId: number) {
  const result: credentialsPrismaSchema[] = await credentialRepository.getCredentialsByUser(userId);

  result.map(async (object: credentialsPrismaSchema) => {
    object.password = await decrypt(object.password);
  });

  return result;
}

export async function getCredential(id: number, userId: number) {
  const verifyCredential: credentialsPrismaSchema = await credentialRepository.getCredentialsById(id);
  if (!verifyCredential) {
    throw { type: 'not_found', message: 'Credential not found' };
  }

  if (verifyCredential.userId !== userId) {
    throw { type: 'unauthorized', message: 'Credential unauthorized for visualization' };
  }

  verifyCredential.password = await decrypt(verifyCredential.password);

  return verifyCredential;
}

export async function deleteCredential(id: number, userId: number) {
  const verifyCredential: credentialsPrismaSchema = await credentialRepository.getCredentialsById(id);
  if (!verifyCredential) {
    throw { type: 'not_found', message: 'Credential not found' };
  }

  if (verifyCredential.userId !== userId) {
    throw { type: 'unauthorized', message: 'Credential unauthorized for deletion' };
  }

  await credentialRepository.deleteCredentialById(id);
}
