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
