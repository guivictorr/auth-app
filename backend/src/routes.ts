import { Router } from 'express';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

const routes = Router();
const usersController = new UsersController();
const sessionController = new SessionController();

routes.post('/users', usersController.create);
routes.get('/users', usersController.index);
routes.post('/session', sessionController.create);

export default routes;
