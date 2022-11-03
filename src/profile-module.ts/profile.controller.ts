import { Body, Controller, Delete, Get, Param, Post, Put , Req } from '@nestjs/common'
import { ProfileService } from './profile.service'
import { Request } from 'express'
import { Profile } from './profile.schema'
import { get } from 'mongoose'

@Controller('profiles')
export class ProfileController {

    constructor(private readonly pService: ProfileService) {}

    @Get()
    async getProfiles(@Req() request: Request) : Promise<Profile[]> {
        console.log(request);
        const result: Profile[] = await this.pService.getProfiles();
        console.log(result);

        return result;
    }

    @Delete(':id')
    async deleteProfile(@Param('id') id: string) {
        console.log(id);
        const result = await this.pService.deleteProfile(id);
        console.log(result)

        return result;
    }

    @Post()
    createProfile(@Body() body) {
        return this.pService.createProfile(body);
    }

    @Put(':id')
    async updateProfile(@Param('id') id: string, @Body() body) {
        console.log(id);
        const result = await this.pService.updateProfile(id, body);
        console.log(result);

        return result;
    }
}