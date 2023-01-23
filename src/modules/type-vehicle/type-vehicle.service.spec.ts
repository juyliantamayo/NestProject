import { Test, TestingModule } from '@nestjs/testing';
import { TypeVehicleService } from './type-vehicle.service';

describe('TypeVehicleService', () => {
  let service: TypeVehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeVehicleService],
    }).compile();

    service = module.get<TypeVehicleService>(TypeVehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
