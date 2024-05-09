import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/user/user.entity';

@Injectable()
export class GetAllUserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    // Filtra los usuarios para devolver solo aquellos que tienen isActive en true
    return this.usersRepository.find({ where: { isActive: true } });
  }
}
