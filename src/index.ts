import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import credentialRoutes from './routes/credentialRoutes.js';
import safeNoteRoutes from './routes/safeNoteRoutes.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(json());

server.use(authRoutes);
server.use(credentialRoutes);
server.use(safeNoteRoutes);
server.use(errorHandlerMiddleware);

const PORT: number = Number(process.env.PORT);

server.listen(PORT, () => console.log(`Rodando server na porta ${PORT}`));
