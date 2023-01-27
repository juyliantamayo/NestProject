import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleDto } from './dto/vehicle.dto';
import { Vehicle, VehicleDocument } from './schema/vehicle';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) { }
  async create(createAutomovilDto: VehicleDto) {
    return await this.vehicleModel.create(createAutomovilDto);
  }

  async findAll() {
    return await this.vehicleModel.find();
  }

  async findOne(id: string) {
    return await this.vehicleModel.findById(id);
  }

  async update(id: string, updateVehicleDto: VehicleDto) {
    return await this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto);
  }

  async remove(id: string) {
    return await this.vehicleModel.findByIdAndRemove(id);
  }
  
  //findAny funciona como filtro para algo especifico

  async findAny(findAnyVehicleDto: VehicleDto) {
    return await this.vehicleModel.find(findAnyVehicleDto);
  }
}
