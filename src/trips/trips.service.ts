import { Injectable } from '@nestjs/common';

import {Prisma } from '@prisma/client';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
@Injectable()
export class TripsService {

    async findWithUserIds(userId: number): Promise<any> {
        return await prisma.trip.findMany({
            where: {
                userId: userId
            }
        });
    }
    
}
