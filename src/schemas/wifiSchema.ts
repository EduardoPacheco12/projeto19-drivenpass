import Joi from 'joi';
import { wifisBody } from '../types/wifiTypes';

export const wifiSchema = Joi.object<wifisBody>({
  title: Joi.string().required(),
  netName: Joi.string().required(),
  password: Joi.string().required(),
});
