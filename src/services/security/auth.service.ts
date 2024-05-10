import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  ) {}

  async signIn(identificationNumber: number, pass: string): Promise<any> {
    const user = await this.userService.findOne({
      where: { identificationNumber: identificationNumber },
    });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    console.log(password);
    return result;
  }
}
