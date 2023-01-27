import { ApiProperty } from '@nestjs/swagger';

export class OwnerDto {

  @ApiProperty()
  nameUser: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

}