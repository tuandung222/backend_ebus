import { Injectable } from '@nestjs/common';

import {Prisma } from '@prisma/client';
const { PrismaClient } = require('@prisma/client')

@Injectable()
export class TripsService {
    async findAll(userId: string): Promise<any> {
        const prisma = new PrismaClient()
        return await prisma.trip.findMany({
            where: {
                userId: userId
            }
        });
    }
}
