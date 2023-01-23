import { ApiProperty } from '@nestjs/swagger';

export class OwnerDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nameUser: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

}