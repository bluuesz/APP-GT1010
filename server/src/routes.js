import { Router } from 'express';

const routes = new Router();

routes.get('/', (_, res) => {
  res.send('Run');
});

export default routes;
