import { Module } from '@nestjs/common';
import { TypeVehicleService } from './type-vehicle.service';
import { TypeVehicleController } from './type-vehicle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeVehicle, TypeVehicleSchema } from './schema/typeVehicle';

@Module({
  controllers: [TypeVehicleController],
  imports: [
    MongooseModule.forFeature([{ name: TypeVehicle.name, schema: TypeVehicleSchema }]),
  ],
  providers: [TypeVehicleService],
})
export class TypeVehicleModule {}
