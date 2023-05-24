import { Controller } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
@Controller('users/{userID}/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}
  @Get()
  async findAll(@Param('userID') userID: string): Promise<any> {
    return await this.bookingsService.findAll(userID);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.bookingsService.findOne(id);
  }
  @Post()
  async create(@Body() data: any): Promise<any> {
    return await this.bookingsService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return await this.bookingsService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.bookingsService.delete(id);
  }
  
};
