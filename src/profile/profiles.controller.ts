import { Controller, Delete, Get, Post, Put, Param, Body, HttpException, HttpStatus, UseFilters, UsePipes } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { ProfileDTO } from './DTOs/profile.dto';
import { Profile } from './interfaces/profile.interface';

@Controller('profile')
export class ProfileController {

    constructor(private readonly profileService : ProfileService) {}

    @Get(':id')
    
    find(@Param('id') id) : Promise<Profile> {
        return this.profileService.find(id)
            .then( (result) => {
                if (result) {
                    return result;
                } else {
                    throw new HttpException('Profile not found :C', HttpStatus.NOT_FOUND);
                }
            })
            .catch( () => {
                throw new HttpException('Profile not found :C', HttpStatus.NOT_FOUND);
            });
    }

    @Post()
    create(@Body() profile: ProfileDTO): Promise<Profile> {
        return this.profileService.create(profile);
    }

    @Put(':id')
    update(@Param('id') id, @Body() profile: ProfileDTO): Promise<Profile> {
        return this.profileService.update(id, profile);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Profile> {
        return this.profileService.delete(id);
    }
}
