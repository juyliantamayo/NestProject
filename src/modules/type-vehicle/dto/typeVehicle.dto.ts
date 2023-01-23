import { ApiProperty } from '@nestjs/swagger';

export class TypeVehicleDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: Date;

}