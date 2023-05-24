import { Controller } from '@nestjs/common';
import { BusStationsService } from './bus_stations.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('bus-stations')
export class BusStationsController {
  constructor(private readonly busStationsService: BusStationsService) {}
  @Get()
  async findAll() {
    return await this.busStationsService.findAll();
  }

}
