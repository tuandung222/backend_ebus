import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Injectable()
export class BuslinesService {
    async findAll(): Promise<any> {
        return await prisma.busLine.findMany();
    }
    async findOne(id: string): Promise<any> {
        return await prisma.busLine.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }
    async create(data: any): Promise<any> {
        return await prisma.busLine.create({
            data
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.busLine.update({
            where: {
                id: parseInt(id)
            },
            data
        });
    }
    async delete(id: string): Promise<any> {
        return await prisma.busLine.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}
