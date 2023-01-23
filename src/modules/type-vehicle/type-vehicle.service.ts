import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleDocument } from '../vehicle/schema/vehicle';
import { TypeVehicleDto } from './dto/typeVehicle.dto';
import { Vehicle } from './schema/typeVehicle';

@Injectable()
export class TypeVehicleService {
  constructor(
    @InjectModel(Vehicle.name) private VehicleModel: Model<VehicleDocument>,
  ) {}
  async create(createTypeVehicleDto: TypeVehicleDto) {
    return await this.VehicleModel.create(createTypeVehicleDto);
  }

  findAll() {
    return `This action returns all typeVehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeVehicle`;
  }

  update(id: number, updateTypeVehicleDto: TypeVehicleDto) {
    return `This action updates a #${id} typeVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeVehicle`;
  }
}
