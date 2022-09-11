import { wifisBody, wifisPrismaSchema } from '../types/wifiTypes.js';
import { decrypt, encrypt } from '../utils/cryptrUtils.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function createWifi(userId: number, body: wifisBody) {
  const title: string = body.title;
  const netName: string = body.netName;
  const password: string = body.password;

  const encryptPassword: string = await encrypt(password);

  await wifiRepository.insertWifi(title, netName, encryptPassword, userId);
}

export async function getWifis(userId: number) {
  const result: wifisPrismaSchema[] = await wifiRepository.getWifisByUser(userId);

  result.map(async (object: wifisPrismaSchema) => {
    object.password = await decrypt(object.password);
  });

  return result;
}
