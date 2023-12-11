import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.email, createUserDto.password);
  }
}
