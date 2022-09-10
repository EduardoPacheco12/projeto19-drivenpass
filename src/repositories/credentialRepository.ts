import { client } from '../databases/postgres.js';

export async function getTitleByUserId(title: string, userId: number) {
  return await client.credentials.findUnique({
    where: {
      title_userId: {
        userId,
        title,
      },
    },
  });
}

export async function insertCredential(title: string, url: string, userName: string, password: string, userId: number) {
  return await client.credentials.create({
    data: {
      title,
      url,
      userName,
      password,
      userId,
    },
  });
}

export async function getCredentialsByUser(userId: number) {
  return await client.credentials.findMany({
    where: {
      userId: userId,
    },
  });
}

export async function getCredentialsById(id: number) {
  return await client.credentials.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteCredentialById(id: number) {
  return await client.credentials.delete({
    where: {
      id,
    },
  });
}
