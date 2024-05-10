import { Type } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AuthController } from './security/auth.controller';

export const CONTROLLERS: Type<any>[] = [AuthController, UserController];
