import { Request, Response } from 'express';
import * as safeNoteService from '../services/safeNoteService.js';
import { safeNotesBody } from '../types/safeNoteTypes.js';

export async function createSafeNotes(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: safeNotesBody = req.body;

  await safeNoteService.createSafeNotes(id, body);
  res.status(201).send('Safe notes created');
}

export async function getSafeNotes(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;

  const result = await safeNoteService.getSafeNotes(id);

  res.status(200).send(result);
}

export async function getSafeNote(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  const result = await safeNoteService.getSafeNote(id, userId);

  res.status(200).send(result);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  await safeNoteService.deleteSafeNote(id, userId);
  res.sendStatus(204);
}
