import { Test, TestingModule } from '@nestjs/testing';
import { LocationSearchingsService } from './location_searchings.service';

describe('LocationSearchingsService', () => {
  let service: LocationSearchingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationSearchingsService],
    }).compile();

    service = module.get<LocationSearchingsService>(LocationSearchingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
