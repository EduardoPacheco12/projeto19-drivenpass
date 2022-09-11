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

export async function getSafeNotes(userId: number) {
  const result: safeNotesPrismaSchema[] = await safeNoteRepository.getCredentialsByUser(userId);

  return result;
}

export async function getSafeNote(id: number, userId: number) {
  const verifySafeNote: safeNotesPrismaSchema = await safeNoteRepository.getSafeNotesById(id);
  if (!verifySafeNote) {
    throw { type: 'not_found', message: 'Safe Note not found' };
  }

  if (verifySafeNote.userId !== userId) {
    throw { type: 'unauthorized', message: 'Credential unauthorized for visualization' };
  }

  return verifySafeNote;
}
