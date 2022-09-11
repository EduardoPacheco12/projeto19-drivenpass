import { Request, Response } from 'express';
import * as wifiService from '../services/wifiService.js';
import { wifisBody } from '../types/wifiTypes';

export async function createWifi(req: Request, res: Response) {
  const { id }: { id: number } = res.locals.id;
  const body: wifisBody = req.body;

  await wifiService.createWifi(id, body);
  res.status(201).send('Wifi created');
}
