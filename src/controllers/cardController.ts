import { Request, Response } from 'express';
import * as cardService from '../services/cardService.js';
import { cardsBody } from '../types/cardTypes.js';

export async function createCards(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: cardsBody = req.body;

  await cardService.createCards(id, body);
  res.status(201).send('Card created');
}
