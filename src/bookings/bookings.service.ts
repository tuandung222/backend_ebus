import { Injectable } from '@nestjs/common';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

@Injectable()
export class BookingsService {
    async findAll(userID: number): Promise<any> {
        return await prisma.booking.findMany({
            where: {
                userId: userID
            }
        });
    }
}
