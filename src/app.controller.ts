import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import NewTeaDto from './newtea.dto';
import Tea from './tea.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/tea')
  allTea() {
    const teaRepo = this.dataSource.getRepository(Tea);
    return teaRepo.find();
  }

  @Delete('/tea/:id')
  deletTea(@Param('id') id: number) {
    const teaRepo = this.dataSource.getRepository(Tea);
    teaRepo.delete(id);
  }

  @Post('/tea')
  newTea(@Body() tea: NewTeaDto) {
    const teaRepo = this.dataSource.getRepository(Tea);
    teaRepo.save(tea);
  }
}
