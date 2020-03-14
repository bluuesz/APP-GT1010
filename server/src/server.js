import 'dotenv/config';

import App from './app';

const port = process.env.PORT || 3334;

App.listen(port);
console.log(`Servidor rodando na porta ${port}`);
