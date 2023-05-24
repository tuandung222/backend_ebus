import { Module } from '@nestjs/common';
import { BuslinesService } from './buslines.service';
import { BuslinesController } from './buslines.controller';

@Module({
  controllers: [BuslinesController],
  providers: [BuslinesService]
})
export class BuslinesModule {}
