import { hash } from 'bcrypt';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, name, password }: Request) {
    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    return user;
  }
}

export default CreateUserService;
