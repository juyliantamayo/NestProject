import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from './schema/owner';

@Module({
  controllers: [OwnerController],
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  ],
  providers: [OwnerService],
})
export class OwnerModule {}
