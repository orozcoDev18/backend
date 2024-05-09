import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { requestUserDto } from 'src/domain/user/dto/requestUser.dto';
import { Repository } from 'typeorm';
import { User } from '../../domain/user/user.entity';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async update(id: number, payload: requestUserDto): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new Error(`Usuario no existe.`);
    }

    if (user?.isActive === false) {
      throw new ConflictException('Usuario no existe.');
    }

    if (
      payload.identificationNumber &&
      payload.identificationNumber !== user.identificationNumber
    ) {
      throw new ConflictException(
        'El número de identificación no puede ser actualizado.',
      );
    }

    await this.usersRepository.update(id, payload);

    return await this.usersRepository.findOneBy({ id });
  }
}
