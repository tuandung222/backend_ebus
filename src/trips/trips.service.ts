import { Injectable } from '@nestjs/common';

import {Prisma } from '@prisma/client';
const { PrismaClient } = require('@prisma/client')

@Injectable()
export class TripsService {

    async findAll() {
        const prisma = new PrismaClient()
        const trips = await prisma.trip.findMany()
        return trips;
    }
    async findOne(id: number) {
        const prisma = new PrismaClient()
        const trip = await prisma.trip.findUnique({
            where: {
                id: id
            }
        })
        return trip;
    }

    async findWithUserIds(userIds: number) {
        const prisma = new PrismaClient()
        const trips = await prisma.trip.findMany({
            where: {
                userId: {
                    in: userIds
                }
            }
        })
        return trips;
    }
}
