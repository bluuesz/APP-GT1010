import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CreateUser from './controllers/User';
import Session from './controllers/Session';
import { CreateTag, ListAllTag } from './controllers/Tag';
import { CreatePosts, IndexPosts, DeletePost } from './controllers/Post';
import UserAndPost from './controllers/UserAndPost';

import FileUpload from './controllers/File';

import middlewares from './middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', CreateUser);
routes.post('/user/login', Session);

routes.use(middlewares);

routes.post('/user/tag', CreateTag);
routes.get('/tags', ListAllTag);
routes.post('/user/post', CreatePosts);
routes.get('/user/posts', UserAndPost);
routes.get('/post/:tag_id', IndexPosts);
routes.delete('/post/:id', DeletePost);

routes.post('/file', upload.single('file'), FileUpload);

export default routes;
