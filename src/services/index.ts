import { Type } from '@nestjs/common';
import { CreateUserService } from './user/userCreate.service';
import { RemoveUserService } from './user/userDelete.service';
import { GetAllUserService } from './user/userGetAll.service';
import { GetOneUserService } from './user/userGetOne.service';
import { UpdateUserService } from './user/userUpdate.service';

export const SERVICES: Type[] = [
  CreateUserService,
  RemoveUserService,
  GetAllUserService,
  GetOneUserService,
  UpdateUserService,
];
