import { Response, Request } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
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

    if (!user) {
      return response.status(400).json({ message: 'Error creating new user.' });
    }

    return response.status(201).json(users_views.render(user));
  }
}

export default UsersController;
