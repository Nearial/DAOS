import { AppService } from './app.service';
import { ProfileService } from './profile-module.ts/profile.service';
export declare class AppController {
    private readonly appService;
    private readonly pService;
    constructor(appService: AppService, pService: ProfileService);
    getHello(): string;
}
