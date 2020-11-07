import { compare, hash } from 'bcrypt';
import User from '../models/User';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  id: string;
}

class UpdateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ name, email, password, id }: Request): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User fot found');
    }

    if (email !== user.email) {
      const verifyEmail = await this.userRepository.findByEmail(email);

      if (verifyEmail) {
        throw new Error('Email already used');
      }
    }

    const passwordCompare = await compare(password, user.password);

    if (passwordCompare) {
      throw new Error('Password already used');
    }

    const passwordHash = await hash(password, 8);

    user.name = name;
    user.email = email;
    user.password = passwordHash;

    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
