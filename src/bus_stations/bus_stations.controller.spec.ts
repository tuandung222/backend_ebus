import { Test, TestingModule } from '@nestjs/testing';
import { BusStationsController } from './bus_stations.controller';
import { BusStationsService } from './bus_stations.service';

describe('BusStationsController', () => {
  let controller: BusStationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusStationsController],
      providers: [BusStationsService],
    }).compile();

    controller = module.get<BusStationsController>(BusStationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
