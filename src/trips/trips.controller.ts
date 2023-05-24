import { Controller } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('users/{userId}/trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}
  @Get()
  async findAll(@Param('userId') userId: string) {
    return await this.tripsService.findAll(userId);
  }
}
