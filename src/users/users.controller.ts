import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/create.user.update.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.email, createUserDto.password);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    console.log(id);

    return this.userService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: updateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
