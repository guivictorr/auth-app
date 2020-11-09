import { Router } from 'express';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';
import authentication from './middlewares/authentication';

const routes = Router();
const usersController = new UsersController();
const sessionController = new SessionController();

routes.post('/users', usersController.create);
routes.put('/users/:id', authentication, usersController.update);
routes.get('/users/:id', authentication, usersController.search);
routes.post('/session', sessionController.create);

export default routes;
