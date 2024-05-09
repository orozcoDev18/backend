import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { requestUserDto } from 'src/domain/user/dto/requestUser.dto';
import { Repository } from 'typeorm';
import { User } from '../../domain/user/user.entity';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(payload: requestUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { identificationNumber: payload.identificationNumber },
    });

    if (existingUser) {
      throw new ConflictException(
        'El usuario con ese número de identificación ya existe.',
      );
    }

    const newUser = this.usersRepository.create(payload);
    await this.usersRepository.save(newUser);

    return newUser;
  }
}
