import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
  @Prop()
  name: string;

  @Prop()
  model: Date;

  @Prop()
  brand: string;

  @Prop()
  color: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);