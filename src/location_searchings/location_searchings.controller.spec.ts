import { Test, TestingModule } from '@nestjs/testing';
import { LocationSearchingsController } from './location_searchings.controller';
import { LocationSearchingsService } from './location_searchings.service';

describe('LocationSearchingsController', () => {
  let controller: LocationSearchingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationSearchingsController],
      providers: [LocationSearchingsService],
    }).compile();

    controller = module.get<LocationSearchingsController>(LocationSearchingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
