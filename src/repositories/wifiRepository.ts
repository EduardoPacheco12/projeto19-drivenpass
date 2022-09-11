import { client } from '../databases/postgres.js';

export async function insertWifi(title: string, netName: string, password: string, userId: number) {
  return await client.wifis.create({
    data: {
      title,
      netName,
      password,
      userId,
    },
  });
}

export async function getWifisByUser(userId: number) {
  return await client.wifis.findMany({
    where: {
      userId: userId,
    },
  });
}

export async function getWifisById(id: number) {
  return await client.wifis.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteWifiById(id: number) {
  return await client.wifis.delete({
    where: {
      id,
    },
  });
}
