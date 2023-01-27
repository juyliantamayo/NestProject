import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './modules/brand/brand.module';
import { OwnerModule } from './modules/owner/owner.module';
import { TypeVehicleModule } from './modules/type-vehicle/type-vehicle.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';



@Module({
  imports: [
    VehicleModule,
    BrandModule,
    OwnerModule,
    TypeVehicleModule,
    MongooseModule.forRoot(
      'mongodb+srv://FredyMontano:Gotsiw_092100@cluster0.u3r1d5z.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
