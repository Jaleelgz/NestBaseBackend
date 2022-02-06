import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/jaleel')
  getHellojaleel(): any {
    return 'Hi,jaleel';
  }
}
