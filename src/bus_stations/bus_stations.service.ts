import { Injectable } from '@nestjs/common';
import { BusStation, Prisma } from '@prisma/client';
const { PrismaClient } = require('@prisma/client')
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
const prisma = new PrismaClient()

@Injectable()
export class BusStationsService {
    constructor() { }
    @Get() 
    async findAll(): Promise<BusStation[]> {
        return await prisma.busStation.findMany();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<BusStation> {
        return await prisma.busStation.findUnique({
            where: { id: Number(id) },
        });
    }

}
