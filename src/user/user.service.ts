import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
    private users: UserDto[] = [];

}
constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: user) {
    this.catsRepository.create(user);
    this.catsRepository.insert(user);
  }