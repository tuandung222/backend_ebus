import { Test, TestingModule } from '@nestjs/testing';
import { BusStationsService } from './bus_stations.service';

describe('BusStationsService', () => {
  let service: BusStationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusStationsService],
    }).compile();

    service = module.get<BusStationsService>(BusStationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
