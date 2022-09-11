import { wifis } from '@prisma/client';

export type wifisPrismaSchema = wifis;

export type wifisBody = Omit<wifis, 'id' | 'userId'>;
