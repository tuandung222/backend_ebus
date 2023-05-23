import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { Get } from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //Route: users
  @Get()
  findAll(){
    return this.userService.findAll();
  } 
}


