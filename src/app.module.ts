import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { TripsModule } from './trips/trips.module';
import { BusStationsModule } from './bus_stations/bus_stations.module';
import { LocationSearchingsModule } from './location_searchings/location_searchings.module';
import { BuslinesModule } from './buslines/buslines.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [ BookingsModule, TripsModule, BusStationsModule, LocationSearchingsModule, BuslinesModule, MessagesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
