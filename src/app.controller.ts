import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';
/* eslint-disable */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:name')
  getHellojaleel(@Param('name') Name: string): any {
    return "Hi, "+Name;
  }
}
