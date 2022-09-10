import Joi from "joi";

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required()
});

export const signInSchema = Joi.object({

});