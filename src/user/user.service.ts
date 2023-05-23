import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';


const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

@Injectable()
export class UserService {
    constructor() { }

    async findAll(): Promise<User[]> {
        return await prisma.user.findMany();
    }

}
