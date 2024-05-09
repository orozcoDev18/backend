import { Type } from '@nestjs/common';
import { User } from './user/user.entity';

export const ENTITIES: Type<any>[] = [User];
