import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import SessionUserService from '../services/SessionUserService';
import session_views from '../views/session_views';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const sessionService = new SessionUserService(userRepository);

    const session = await sessionService.execute({
      email,
      password,
    });

    return response.status(200).json(session_views.render(session));
  }
}

export default SessionController;
