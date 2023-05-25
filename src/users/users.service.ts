import { Injectable } from '@nestjs/common';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


@Injectable()
export class UsersService {
    async findAll(): Promise<any> {
        return await prisma.user.findMany();
    }
    async findOne(id: string): Promise<any> {
        return await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }
    async create(data: any): Promise<any> {
        return await prisma.user.create({
            data
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data
        });
    }
    async delete(id: string): Promise<any> {
        return await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}
