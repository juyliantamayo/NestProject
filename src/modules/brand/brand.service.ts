import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandDto } from './dto/brand.dto';
import { Brand, BrandDocument } from './schema/brand';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name) private BrandModel: Model<BrandDocument>,
  ) {}

  async create(createBrandDto: BrandDto) {
    return await this.BrandModel.create(createBrandDto);
  }

  async findAll() {
    return await this.BrandModel.find();
  }

  async findOne(id: string) {
    return await this.BrandModel.findById(id);
  }

  async update(id: string, updateBrandDto: BrandDto) {
    return await this.BrandModel.findByIdAndUpdate(id, updateBrandDto);
  }

  async remove(id: string) {
    return await this.BrandModel.findByIdAndDelete(id);
  }
}
