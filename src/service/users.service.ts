import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

// This should be a real class/interface representing a user entity
@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserDto> {
    return this.users.find((user) => user.username === username);
  }

  async findAll(): Promise<UserDto[]> {
    return this.users;
  }
}