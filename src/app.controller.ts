import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  @Post()
  addUser(@Body() user: UserDto) {
    user.role.updateId('newId');
    return;
  }
}
