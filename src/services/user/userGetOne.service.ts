import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/user/user.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class GetOneUserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getOne(id: number): Promise<User | null> {
    // Busca un usuario por su ID
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`Usuario no existe.`);
    }

    if (!user.isActive) {
      throw new NotFoundException(`Usuario no existe..`);
    }

    return user;
  }
}
