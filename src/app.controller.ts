import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileService } from './profile-module.ts/profile.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pService: ProfileService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
