import { Module } from '@nestjs/common';
import { AutomovilService } from './automovil.service';
import { AutomovilController } from './automovil.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './schema/automovil';

@Module({
  controllers: [AutomovilController],
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  providers: [AutomovilService],
})
export class AutomovilModule {}
