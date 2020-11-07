import { Response, Request } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import users_views from '../views/users_views';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const users = await userRepository.findAll();

    return response.status(200).json(users_views.renderMany(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(users_views.render(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params;

    const userRepository = new UserRepository();
    const updateUser = new UpdateUserService(userRepository);

    const user = await updateUser.execute({
      id,
      name,
      email,
      password,
    });

    return response.status(200).json(users_views.render(user));
  }
}

export default UsersController;
