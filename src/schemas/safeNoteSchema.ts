import Joi from 'joi';
import { safeNotesBody } from '../types/safeNoteTypes.js';

export const safeNoteSchema = Joi.object<safeNotesBody>({
  title: Joi.string().max(50).required(),
  note: Joi.string().max(1000).required(),
});
