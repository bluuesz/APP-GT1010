import 'dotenv/config';
import express from 'express';

import cors from 'cors';
import routes from './routes';

// import './database';

const server = express();
const port = process.env.PORT || 3334;

server.use(express.json());

server.use(cors());

server.use('/', routes);

server.listen(port);
console.log(`Servidor rodando na porta ${port}`);
