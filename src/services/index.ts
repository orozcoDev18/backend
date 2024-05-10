import { Type } from '@nestjs/common';
import { CreateUserService } from './user/userCreate.service';
import { RemoveUserService } from './user/userDelete.service';
import { GetAllUserService } from './user/userGetAll.service';
import { GetOneUserService } from './user/userGetOne.service';
import { UpdateUserService } from './user/userUpdate.service';
import { AuthService } from './security/auth.service';

export const SERVICES: Type[] = [
  AuthService,
  CreateUserService,
  RemoveUserService,
  GetAllUserService,
  GetOneUserService,
  UpdateUserService,
];
