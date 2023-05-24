import { Controller } from '@nestjs/common';
import { LocationSearchingsService } from './location_searchings.service';

@Controller('location-searchings')
export class LocationSearchingsController {
  constructor(private readonly locationSearchingsService: LocationSearchingsService) {}
}
