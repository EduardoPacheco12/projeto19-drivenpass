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
