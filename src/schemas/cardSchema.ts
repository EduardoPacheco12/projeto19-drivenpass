import Joi from 'joi';
import { cardsBody } from '../types/cardTypes';

export const cardSchema = Joi.object<cardsBody>({
  title: Joi.string().required(),
  cardNumber: Joi.string().pattern(new RegExp('^[0-9]{16}')).length(16).required(),
  printedName: Joi.string().required(),
  securityCode: Joi.string().pattern(new RegExp('^[0-9]{3}')).length(3).required(),
  expirationDate: Joi.string().pattern(new RegExp('^(0[1-9]|1[0-2])/([0-9]{2})$')).required(),
  password: Joi.string().pattern(new RegExp('^[0-9]{4}')).length(4).required(),
  isVirtual: Joi.boolean().strict().required(),
  type: Joi.string().valid('crédito', 'débito', 'ambos').required(),
});
