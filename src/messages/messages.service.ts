import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class MessagesService {
    async findWithUserIds(userId: string): Promise<any> {
        return await prisma.message.findMany({
            where: {
                userId: parseInt(userId)
            }
        });
    }
    async findAll(userId: string): Promise<any> {
        return await prisma.message.findMany({
            where: {
                userId: parseInt(userId)
            }
        });
    }
    async findOne(id: string): Promise<any> {
        return await prisma.message.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }
    async create(data: any): Promise<any> {
        return await prisma.message.create({
            data
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.message.update({
            where: {
                id: parseInt(id)
            },
            data
        });
    }
    async delete(id: string): Promise<any> {
        return await prisma.message.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}
