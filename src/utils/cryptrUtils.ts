import Cryptr from 'cryptr';

export async function encrypt(value: string) {
  const cryptr: Cryptr = new Cryptr(process.env.SECRET);
  return cryptr.encrypt(value);
}

export async function decrypt(value: string) {
  const cryptr: Cryptr = new Cryptr(process.env.SECRET);
  return cryptr.decrypt(value);
}
