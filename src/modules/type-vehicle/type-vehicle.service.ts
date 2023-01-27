import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TypeVehicleDto } from './dto/typeVehicle.dto';
import { TypeVehicle, TypeVehicleDocument } from './schema/typeVehicle';

@Injectable()
export class TypeVehicleService {
  constructor(
    @InjectModel(TypeVehicle.name) private typeVehicleModel: Model<TypeVehicleDocument>,
  ) {}
  async create(createTypeVehicleDto: TypeVehicleDto) {
    return await this.typeVehicleModel.create(createTypeVehicleDto);
  }

  async findAll() {
    return await this.typeVehicleModel.find(); 
  }

  async findOne(id: string) {
    return await this.typeVehicleModel.findById(id); 
  }

  async update(id: string, updateTypeVehicleDto: TypeVehicleDto) {
    return await this.typeVehicleModel.findByIdAndUpdate(id, updateTypeVehicleDto);
  }

  async remove(id: string) {
    return await this.typeVehicleModel.findByIdAndRemove(id);
  }
}
