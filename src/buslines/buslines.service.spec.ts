import { Test, TestingModule } from '@nestjs/testing';
import { BuslinesService } from './buslines.service';

describe('BuslinesService', () => {
  let service: BuslinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuslinesService],
    }).compile();

    service = module.get<BuslinesService>(BuslinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
