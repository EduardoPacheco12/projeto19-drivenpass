import { safeNotesBody, safeNotesPrismaSchema } from '../types/safeNoteTypes.js';
import * as safeNoteRepository from '../repositories/safeNoteRepository.js';

export async function createSafeNotes(userId: number, body: safeNotesBody) {
  const title: string = body.title;
  const note: string = body.note;

  const verifyTitleByUserId: safeNotesPrismaSchema = await safeNoteRepository.getTitleByUserId(title, userId);
  if (verifyTitleByUserId) {
    throw { type: 'unauthorized', message: 'A safe note with that title already exists, try again' };
  }

  await safeNoteRepository.insertSafeNote(title, note, userId);
}
