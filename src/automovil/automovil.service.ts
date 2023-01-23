import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleDto } from './dto/vechicle.dto';
import { Vehicle, VehicleDocument } from './schema/automovil';

@Injectable()
export class AutomovilService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}
  async create(createAutomovilDto: VehicleDto) {
    return await this.vehicleModel.create(createAutomovilDto);
  }

  findAll() {
    return `This action returns all automovil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} automovil`;
  }

  update(id: number, updateAutomovilDto: VehicleDto) {
    return `This action updates a #${id} automovil`;
  }

  remove(id: number) {
    return `This action removes a #${id} automovil`;
  }
}
