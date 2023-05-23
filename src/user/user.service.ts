import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

}
