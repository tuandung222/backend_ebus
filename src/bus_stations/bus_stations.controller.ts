import { Controller } from '@nestjs/common';
import { BusStationsService } from './bus_stations.service';

@Controller('bus-stations')
export class BusStationsController {
  constructor(private readonly busStationsService: BusStationsService) {}
}
