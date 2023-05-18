/**
 * arquivo: app.ts
 * descrição: arquivo responsável por fazer a conexão com o arquivo 'server.ts'
 * data: 05/18/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application, Request, Response, NextFunction } from 'express';
import { router as userRoutes } from './routes/user.routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
});

export default app;
