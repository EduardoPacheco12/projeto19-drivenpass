import Joi from "joi";
import { credentialsBody } from "../types/credentialTypes";

export const credentialSchema = Joi.object<credentialsBody>({
  title: Joi.string().required(),
	url: Joi.string().required(),
	userName: Joi.string().required(),
	password: Joi.string().required()
});