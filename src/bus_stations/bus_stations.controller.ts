import { Controller } from '@nestjs/common';
import { BusStationsService } from './bus_stations.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('bus-stations')
@ApiTags('Bus Stations (Trạm xe buýt)')
export class BusStationsController {
  constructor(private readonly busStationsService: BusStationsService) {}
  @Get()
  async findAll() {
    return await this.busStationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.busStationsService.findOne(id);
  }

}
