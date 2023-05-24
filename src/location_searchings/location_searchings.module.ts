import { Module } from '@nestjs/common';
import { LocationSearchingsService } from './location_searchings.service';
import { LocationSearchingsController } from './location_searchings.controller';

@Module({
  controllers: [LocationSearchingsController],
  providers: [LocationSearchingsService]
})
export class LocationSearchingsModule {}
