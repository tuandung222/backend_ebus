import { Module } from '@nestjs/common';
import { BusStationsService } from './bus_stations.service';
import { BusStationsController } from './bus_stations.controller';

@Module({
  controllers: [BusStationsController],
  providers: [BusStationsService]
})
export class BusStationsModule {}
