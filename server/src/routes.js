import { Router } from 'express';

import CreateUser from './controllers/User';
import Session from './controllers/Session';
import { CreateTag } from './controllers/Tag';
import { CreatePosts, IndexPosts } from './controllers/Post';
import UserAndPost from './controllers/UserAndPost';

import middlewares from './middlewares/auth';

const routes = new Router();

routes.post('/user', CreateUser);
routes.post('/user/login', Session);

routes.use(middlewares);

routes.post('/user/tag', CreateTag);
routes.post('/user/post', CreatePosts);
routes.get('/user/posts', UserAndPost);
routes.get('/post/:tag', IndexPosts);

export default routes;
