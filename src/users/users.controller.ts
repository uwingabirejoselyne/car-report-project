import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto.email, createUserDto.password);
  }
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
  @Get()
  findAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }
}
