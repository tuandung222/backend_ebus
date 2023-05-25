import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { username, password }: LoginDto) {
    return this.authService.login(username, password);
  }

  @Post('signup')
  @ApiOkResponse({ type: AuthEntity })
  signup(@Body() { username, password, email, phone }: SignUpDto) {
    return this.authService.signup(username, password, email, phone);
  }
}