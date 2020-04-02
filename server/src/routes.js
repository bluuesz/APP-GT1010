import { Router } from 'express';

import createUser from './controllers/createUser';

const routes = new Router();

routes.post('/user', createUser);

export default routes;
