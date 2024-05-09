import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/user/user.entity';

@Injectable()
export class RemoveUserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async remove(id: number): Promise<string> {
    // Encuentra al usuario por su ID
    const user = await this.usersRepository.findOneBy({ id });

    // Valida si el usuario no existe
    if (!user) {
      throw new NotFoundException(`Usuario no existe.`);
    }

    // Valida si el usuario está activo
    if (!user.isActive) {
      throw new ConflictException('Usuario no existe.');
    }

    // Realiza la eliminación lógica del usuario
    await this.usersRepository.update(id, { isActive: false });

    return 'Usuario eliminado exitosamente.';
  }
}
