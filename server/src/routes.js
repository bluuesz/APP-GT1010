import { Router } from 'express';

import createUser from './controllers/createUser';
import session from './controllers/session';
import createTag from './controllers/createTag';
import createPost, { Index } from './controllers/createPost';

import middlewares from './middlewares/auth';

const routes = new Router();

routes.post('/user', createUser);
routes.post('/user/login', session);

routes.use(middlewares);

routes.post('/user/tag', createTag);
routes.post('/user/post', createPost);
routes.get('/user/post', Index);

export default routes;
