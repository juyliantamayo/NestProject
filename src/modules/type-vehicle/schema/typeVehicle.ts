import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TypeVehicleDocument = HydratedDocument<TypeVehicle>;

@Schema()
export class TypeVehicle {

  @Prop()
  name: string;
  
}

export const TypeVehicleSchema = SchemaFactory.createForClass(TypeVehicle);