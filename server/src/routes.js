import { Router } from 'express';

import createUser from './controllers/createUser';
import session from './controllers/session';

const routes = new Router();

routes.post('/user', createUser);
routes.post('/user/login', session);

export default routes;
