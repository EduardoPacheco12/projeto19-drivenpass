import { Request, Response } from "express";
import { SignUpBody } from "../types/authTypes.js";
import * as authService from "../services/authService.js";

export default async function signUp(req: Request, res: Response) {
  const body: SignUpBody = req.body;
	
  await authService.signUp(body);
	res.sendStatus(201);
}