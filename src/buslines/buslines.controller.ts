import { Controller } from '@nestjs/common';
import { BuslinesService } from './buslines.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
@Controller('buslines')
export class BuslinesController {
  constructor(private readonly buslinesService: BuslinesService) {}
  @Get()
  async findAll(): Promise<any> {
    return await this.buslinesService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.buslinesService.findOne(id);
  }
  @Post()
  async create(@Body() data: any): Promise<any> {
    return await this.buslinesService.create(data);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<any> {
    return await this.buslinesService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.buslinesService.delete(id);
  }
}
