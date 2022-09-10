import { Request, Response } from "express";
import { authBody } from "../types/authTypes.js";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
  const body: authBody = req.body;
	
  await authService.signUp(body);
	res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const body: authBody = req.body;
  console.log("chegou");
  const token = await authService.signIn(body);
  res.status(200).send(token);
}