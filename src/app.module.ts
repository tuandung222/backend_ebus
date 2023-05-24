import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookingsModule } from './bookings/bookings.module';
import { TripsModule } from './trips/trips.module';
import { BusStationsModule } from './bus_stations/bus_stations.module';
import { LocationSearchingsModule } from './location_searchings/location_searchings.module';



@Module({
  imports: [UserModule, BookingsModule, TripsModule, BusStationsModule, LocationSearchingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
