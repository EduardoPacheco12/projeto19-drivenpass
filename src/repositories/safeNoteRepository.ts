import { client } from '../databases/postgres.js';

export async function getTitleByUserId(title: string, userId: number) {
  return await client.safeNotes.findUnique({
    where: {
      title_userId: {
        userId,
        title,
      },
    },
  });
}

export async function insertSafeNote(title: string, note: string, userId: number) {
  return await client.safeNotes.create({
    data: {
      title,
      note,
      userId,
    },
  });
}

export async function getCredentialsByUser(userId: number) {
  return await client.safeNotes.findMany({
    where: {
      userId: userId,
    },
  });
}

export async function getSafeNotesById(id: number) {
  return await client.safeNotes.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteSafeNoteById(id: number) {
  return await client.safeNotes.delete({
    where: {
      id,
    },
  });
}
