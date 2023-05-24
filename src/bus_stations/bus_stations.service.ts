import { Injectable } from '@nestjs/common';
import { BusStation, Prisma } from '@prisma/client';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

@Injectable()
export class BusStationsService {
    constructor() { }

    async findAll(): Promise<BusStation[]> {
        return await prisma.busStation.findMany();
    }

    async findOne(id: number): Promise<BusStation> {
        return await prisma.busStation.findUnique({
            where: { id: id },
        });
    }
}
