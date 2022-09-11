import { client } from '../databases/postgres.js';
import { cardType } from '../types/cardTypes.js';

export async function getTitleByUserId(title: string, userId: number) {
  return await client.cards.findUnique({
    where: {
      title_userId: {
        userId,
        title,
      },
    },
  });
}

export async function insertCard(
  title: string,
  cardNumber: string,
  printedName: string,
  securityCode: string,
  expirationDate: string,
  password: string,
  isVirtual: boolean,
  type: cardType,
  userId: number
) {
  return await client.cards.create({
    data: {
      title,
      cardNumber,
      printedName,
      securityCode,
      expirationDate,
      password,
      isVirtual,
      type,
      userId,
    },
  });
}

export async function getCardsByUser(userId: number) {
  return await client.cards.findMany({
    where: {
      userId: userId,
    },
  });
}

export async function getCardsById(id: number) {
  return await client.cards.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteCardsById(id: number) {
  return await client.cards.delete({
    where: {
      id,
    },
  });
}
