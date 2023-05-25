import { Controller } from '@nestjs/common';
import { BuslinesService } from './buslines.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@Controller('buslines')
@ApiTags('Buslines (Tuyến xe buýt)')
export class BuslinesController {
  constructor(private readonly buslinesService: BuslinesService) {}
  @Get()
  @ApiOkResponse({ description: 'List of buslines' })
  async findAll(): Promise<any> {
    return await this.buslinesService.findAll();
  }
  @Get(':id')
  @ApiOkResponse({ description: 'Search by ID' })
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
