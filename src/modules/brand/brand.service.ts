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

  findAll() {
    return `This action returns all brand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: BrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
