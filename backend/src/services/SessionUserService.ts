import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

class SessionUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new Error('Invalid Credentials');
    }

    const token = sign({}, process.env.APP_SECRET as string, {
      expiresIn: '1d',
    });

    return {
      token,
      user,
    };
  }
}

export default SessionUserService;
