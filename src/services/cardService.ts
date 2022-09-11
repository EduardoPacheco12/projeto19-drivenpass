import { cardsBody, cardsPrismaSchema, cardType } from '../types/cardTypes.js';
import * as cardRepository from '../repositories/cardRepository.js';
import { encrypt } from '../utils/cryptrUtils.js';

export async function createCards(userId: number, body: cardsBody) {
  const title: string = body.title;
  const cardNumber: string = body.cardNumber;
  const printedName: string = body.printedName;
  const securityCode: string = body.securityCode;
  const expirationDate: string = body.expirationDate;
  const password: string = body.password;
  const isVirtual: boolean = body.isVirtual;
  const type: cardType = body.type;

  const verifyTitleByUserId: cardsPrismaSchema = await cardRepository.getTitleByUserId(title, userId);
  if (verifyTitleByUserId) {
    throw { type: 'unauthorized', message: 'A card with that title already exists, try again' };
  }
  const encryptPassword: string = await encrypt(password);
  const encryptSecurityCode: string = await encrypt(securityCode);

  await cardRepository.insertCard(
    title,
    cardNumber,
    printedName,
    encryptSecurityCode,
    expirationDate,
    encryptPassword,
    isVirtual,
    type,
    userId
  );
}
