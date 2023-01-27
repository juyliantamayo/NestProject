import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OwnerDto } from './dto/owner.dto';
import { Owner, OwnerDocument } from './schema/owner';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private BrandModel: Model<OwnerDocument>,
  ) {}
  async create(createOwnerDto: OwnerDto) {
    return await this.BrandModel.create(createOwnerDto);
  }

  async findAll() {
    return await this.BrandModel.find();
  }

  async findOne(id: string) {
    return await this.BrandModel.findById(id);
  }

  async update(id: string, updateOwnerDto: OwnerDto) {
    return await this.BrandModel.findByIdAndUpdate(id, updateOwnerDto)
  }

  async remove(id: string) {
    return await this.BrandModel.findByIdAndRemove(id);
  }
}
