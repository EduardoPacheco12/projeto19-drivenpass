import { safeNotes } from '@prisma/client';

export type safeNotesPrismaSchema = safeNotes;

export type safeNotesBody = Omit<safeNotes, 'id' | 'userId'>;
