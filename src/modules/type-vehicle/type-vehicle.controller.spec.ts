import { Test, TestingModule } from '@nestjs/testing';
import { TypeVehicleController } from './type-vehicle.controller';
import { TypeVehicleService } from './type-vehicle.service';

describe('TypeVehicleController', () => {
  let controller: TypeVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeVehicleController],
      providers: [TypeVehicleService],
    }).compile();

    controller = module.get<TypeVehicleController>(TypeVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
