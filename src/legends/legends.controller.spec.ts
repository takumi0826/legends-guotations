import { Test, TestingModule } from '@nestjs/testing';
import { LegendsController } from './legends.controller';
import { LegendsService } from './legends.service';

describe('LegendsController', () => {
  let controller: LegendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegendsController],
      providers: [LegendsService],
    }).compile();

    controller = module.get<LegendsController>(LegendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
