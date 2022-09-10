import Joi from "joi";
import { authBody } from "../types/authTypes";

export const authSchema = Joi.object<authBody>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
});
