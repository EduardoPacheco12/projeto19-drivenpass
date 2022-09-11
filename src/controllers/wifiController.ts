import { Request, Response } from 'express';
import * as wifiService from '../services/wifiService.js';
import { wifisBody, wifisPrismaSchema } from '../types/wifiTypes';

export async function createWifi(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: wifisBody = req.body;

  await wifiService.createWifi(id, body);
  res.status(201).send('Wifi created');
}

export async function getWifis(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;

  const result: wifisPrismaSchema[] = await wifiService.getWifis(id);

  res.status(200).send(result);
}

export async function getWIfi(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  const result = await wifiService.getWifi(id, userId);

  res.status(200).send(result);
}

export async function deleteWifi(req: Request, res: Response) {
  const userId: number = res.locals.id.id;
  const id: number = Number(req.params.id);

  await wifiService.deleteWifi(id, userId);
  res.sendStatus(204);
}
