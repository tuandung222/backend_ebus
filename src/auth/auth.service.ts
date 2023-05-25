import { AuthEntity } from './entity/auth.entity';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = await password === user.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}