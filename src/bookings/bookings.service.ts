import { Injectable } from '@nestjs/common';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

@Injectable()
export class BookingsService {
    async findAll(userID: string): Promise<any> {
        return await prisma.booking.findMany({
            where: {
                userId: parseInt(userID)
            }
        });
    }
    async findOne(id: string): Promise<any> {
        return await prisma.booking.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }
    async create(data: any): Promise<any> {
        return await prisma.booking.create({
            data
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.booking.update({
            where: {
                id: parseInt(id)
            },
            data
        });
    }
    async delete(id: string): Promise<any> {
        return await prisma.booking.delete({
            where: {
                id: parseInt(id)
            }
        });
    } 
}
