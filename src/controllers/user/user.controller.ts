import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { requestUserDto } from 'src/domain/user/dto/requestUser.dto';
import { CreateUserService } from 'src/services/user/userCreate.service';
import { RemoveUserService } from 'src/services/user/userDelete.service';
import { GetAllUserService } from 'src/services/user/userGetAll.service';
import { GetOneUserService } from 'src/services/user/userGetOne.service';
import { UpdateUserService } from 'src/services/user/userUpdate.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly CreateService: CreateUserService,
    private readonly RemoveService: RemoveUserService,
    private readonly GetAllService: GetAllUserService,
    private readonly GetOneService: GetOneUserService,
    private readonly UpdateService: UpdateUserService,
  ) {}

  @Post('/create')
  create(@Body() createUserDto: requestUserDto) {
    return this.CreateService.create(createUserDto);
  }

  @Get('/getAll')
  getAll() {
    return this.GetAllService.getAll();
  }

  @Get('/getOne/:id')
  getOne(@Param('id') id: number) {
    return this.GetOneService.getOne(+id);
  }

  @Put('/update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: requestUserDto) {
    return this.UpdateService.update(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.RemoveService.remove(+id);
  }
}
