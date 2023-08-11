/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllIncome(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;

    return data.report.filter((post) => post.type === reportType);
  }

  @Get(':id')
  getIncomeById(@Param('id') id: string) {
    return data.report.find((post) => post.id === id);
  }

  @Post('')
  createReport(
    @Body() { amount, source }: { source: string; amount: number },
    @Param('type') type: string,
  ) {
    const newData = {
      id: '34121',
      amount,
      created_at: new Date(),
      source,
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENCE,
      updated_at: new Date(),
    };

    return newData;
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
