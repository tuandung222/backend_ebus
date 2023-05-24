import { Controller } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('users/:userId/trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}
  async findWithUserIds(userId: string): Promise<any> {
    return await this.tripsService.findWithUserIds(userId);
  }
  @Get()
  async findAll(@Param('userId') userId: string): Promise<any> {
    return await this.tripsService.findAll(userId);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.tripsService.findOne(id);
  }
  @Post()
  async create(@Body() data: any): Promise<any> {
    return await this.tripsService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return await this.tripsService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.tripsService.delete(id);
  }
}