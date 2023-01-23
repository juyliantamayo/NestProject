import { Module } from '@nestjs/common';
import { TypeVehicleService } from './type-vehicle.service';
import { TypeVehicleController } from './type-vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schema/typeVehicle';

@Module({
  controllers: [TypeVehicleController],
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  providers: [TypeVehicleService],
})
export class TypeVehicleModule {}
