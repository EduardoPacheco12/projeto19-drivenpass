import { cards, cardTypes } from '@prisma/client';

export type cardsPrismaSchema = cards;

export type cardType = cardTypes;

export type cardsBody = Omit<cards, 'id' | 'userId'>;
