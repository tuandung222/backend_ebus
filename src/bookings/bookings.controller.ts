import { Controller } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('users/{userID}/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}
  async findAll(userID: number): Promise<any> {
    return await this.bookingsService.findAll(userID);
  }
};
