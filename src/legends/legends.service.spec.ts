import { Test, TestingModule } from '@nestjs/testing';
import { LegendsService } from './legends.service';

describe('LegendsService', () => {
  let service: LegendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegendsService],
    }).compile();

    service = module.get<LegendsService>(LegendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
