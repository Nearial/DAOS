import { Injectable } from '@nestjs/common';
import { Profile } from './interfaces/profile.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {

    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

    async find(id: string): Promise<Profile> {
        return await this.profileModel.findOne({ _id: id });
    }

    async create(profile: Profile): Promise<Profile> {
        const newProfile = new this.profileModel(profile);
        return await newProfile.save();
    }

    /*async update(id: string, profile: Profile): Promise<Profile> {
        const profileToUpdate = await this.profileModel.findById(id);
        profileToUpdate.email = profile.email;
        profileToUpdate.password = profile.password;
        profileToUpdate.name = profile.name;
        profileToUpdate.about = profile.about;

        return await profileToUpdate.save();
    }*/

    async update(id: string, profile: Profile): Promise<Profile> {
        return await this.profileModel.findByIdAndUpdate(id, profile, {new : true});
    }

    async delete(id: string): Promise<Profile> {
        return await this.profileModel.findByIdAndDelete(id);
    }
}
