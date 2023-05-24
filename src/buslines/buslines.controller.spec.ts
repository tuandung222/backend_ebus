import { Test, TestingModule } from '@nestjs/testing';
import { BuslinesController } from './buslines.controller';
import { BuslinesService } from './buslines.service';

describe('BuslinesController', () => {
  let controller: BuslinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuslinesController],
      providers: [BuslinesService],
    }).compile();

    controller = module.get<BuslinesController>(BuslinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
