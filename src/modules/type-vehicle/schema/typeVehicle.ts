import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TypeVehDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
  @Prop()
  id: string;

  @Prop()
  name: Date;
  
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);