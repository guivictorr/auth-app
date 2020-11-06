import { Response, Request } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const users = await userRepository.findAll();

    return response.status(200).json(users);
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

    return response.status(201).json(user);
  }
}

export default UsersController;
