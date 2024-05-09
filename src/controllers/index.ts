import { Type } from '@nestjs/common';
import { UserController } from './user/user.controller';

export const CONTROLLERS: Type<any>[] = [UserController];
