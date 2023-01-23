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

  findAll() {
    return `This action returns all owner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateOwnerDto: OwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
