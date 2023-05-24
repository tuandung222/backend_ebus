import { Injectable } from '@nestjs/common';

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
@Injectable()
export class TripsService {

    async findWithUserIds(userId: string): Promise<any> {
        return await prisma.Trip.findMany({
            where: {
                userId: parseInt(userId)
            }
        });
    }
    async findAll(userId: string): Promise<any> {
        return await prisma.Trip.findMany({
            where: {
                userId: parseInt(userId)
            }
        });
    }
    async findOne(id: string): Promise<any> {
        return await prisma.Trip.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }
    async create(data: any): Promise<any> {
        return await prisma.Trip.create({
            data
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.Trip.update({
            where: {
                id: parseInt(id)
            },
            data
        });
    }
    async delete(id: string): Promise<any> {
        return await prisma.Trip.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}
