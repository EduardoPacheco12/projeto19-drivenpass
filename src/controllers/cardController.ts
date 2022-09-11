import { Request, Response } from 'express';
import * as cardService from '../services/cardService.js';
import { cardsBody, cardsPrismaSchema } from '../types/cardTypes.js';

export async function createCards(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: cardsBody = req.body;

  await cardService.createCards(id, body);
  res.status(201).send('Card created');
}

export async function getCards(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;

  const result: cardsPrismaSchema[] = await cardService.getCards(id);

  res.status(200).send(result);
}

export async function getCard(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  const result = await cardService.getCard(id, userId);

  res.status(200).send(result);
}

export async function deleteCard(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  await cardService.deleteCard(id, userId);
  res.sendStatus(204);
}
