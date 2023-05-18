/**
 * arquivo: app.ts
 * descrição: arquivo responsável por fazer a conexão com o arquivo 'server.ts'
 * data: 05/18/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello, Developers! Welcome to Microsoft Reactor São Paulo!</h1>');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} 🚀`));

export default app;
