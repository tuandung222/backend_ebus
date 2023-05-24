import { Controller } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('users/{userId}/trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}
  @Get()
  findAll(@Param('userId') userId: string) {
    return this.tripsService.findWithUserIds(userId);
  }
}
