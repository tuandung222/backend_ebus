import { Controller } from '@nestjs/common';
import { LocationSearchingsService } from './location_searchings.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
@Controller('users/:userId/location_searchings')
export class LocationSearchingsController {
  constructor(private readonly locationSearchingsService: LocationSearchingsService) {}
  async findWithUserIds(userId: string): Promise<any> {
    return await this.locationSearchingsService.findWithUserIds(userId);
  }
  @Get()
  async findAll(@Param('userId') userId: string): Promise<any> {
    return await this.locationSearchingsService.findAll(userId);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.locationSearchingsService.findOne(id);
  }
  @Post()
  async create(@Body() data: any): Promise<any> {
    return await this.locationSearchingsService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return await this.locationSearchingsService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.locationSearchingsService.delete(id);
  }
  
}
