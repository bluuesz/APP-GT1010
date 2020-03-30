import 'dotenv/config';

import express from 'express';

const server = express();
const port = process.env.PORT || 3334;

server.listen(port);
console.log(`Servidor rodando na porta ${port}`);
