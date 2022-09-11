import { wifisBody } from '../types/wifiTypes.js';
import { decrypt, encrypt } from '../utils/cryptrUtils.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function createWifi(userId: number, body: wifisBody) {
  const title: string = body.title;
  const netName: string = body.netName;
  const password: string = body.password;

  const encryptPassword: string = await encrypt(password);

  await wifiRepository.insertWifi(title, netName, encryptPassword, userId);
}
