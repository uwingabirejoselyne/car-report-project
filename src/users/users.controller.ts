import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/create.user.update.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto.email, createUserDto.password);
  }

  @Serialize(UserDto)
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
