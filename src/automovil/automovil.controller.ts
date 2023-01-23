import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AutomovilService } from './automovil.service';
import { VehicleDto } from './dto/vechicle.dto';

@ApiTags('Automoviles')
@Controller('automovil')
export class AutomovilController {
  constructor(private readonly automovilService: AutomovilService) {}

  @Post()
  create(@Body() createAutomovilDto: VehicleDto) {
    return this.automovilService.create(createAutomovilDto);
  }

  @Get()
  findAll() {
    return this.automovilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.automovilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutomovilDto: VehicleDto) {
    return this.automovilService.update(+id, updateAutomovilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.automovilService.remove(+id);
  }
}
