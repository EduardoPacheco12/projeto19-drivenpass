import { cardsBody, cardsPrismaSchema, cardType } from '../types/cardTypes.js';
import * as cardRepository from '../repositories/cardRepository.js';
import { decrypt, encrypt } from '../utils/cryptrUtils.js';

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

export async function getCards(userId: number) {
  const result: cardsPrismaSchema[] = await cardRepository.getCardsByUser(userId);

  result.map(async (object: cardsPrismaSchema) => {
    object.password = await decrypt(object.password);
  });

  result.map(async (object: cardsPrismaSchema) => {
    object.securityCode = await decrypt(object.securityCode);
  });

  return result;
}

export async function getCard(id: number, userId: number) {
  const verifyCard: cardsPrismaSchema = await cardRepository.getCardsById(id);
  if (!verifyCard) {
    throw { type: 'not_found', message: 'Card not found' };
  }

  if (verifyCard.userId !== userId) {
    throw { type: 'unauthorized', message: 'Card unauthorized for visualization' };
  }

  verifyCard.password = await decrypt(verifyCard.password);
  verifyCard.securityCode = await decrypt(verifyCard.securityCode);

  return verifyCard;
}

export async function deleteCard(id: number, userId: number) {
  const verifyCard: cardsPrismaSchema = await cardRepository.getCardsById(id);
  if (!verifyCard) {
    throw { type: 'not_found', message: 'Card not found' };
  }

  if (verifyCard.userId !== userId) {
    throw { type: 'unauthorized', message: 'Card unauthorized for deletion' };
  }

  await cardRepository.deleteCardsById(id);
}
