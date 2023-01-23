import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  model: Date;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  color: string;
}
