import { Injectable } from '@nestjs/common'
import { InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {Profile, ProfileDocument } from './profile.schema'

@Injectable()
export class ProfileService {
    
    constructor(@InjectModel(Profile.name) private pModel: Model<ProfileDocument>) {}

    getProfiles(): Promise<Profile[]> {
        return this.pModel.find().exec();
    }

    createProfile(profile: any) {
        const savedProfile = new this.pModel(profile);
        return savedProfile.save();
    }

    async updateProfile(id: string, profile: Profile){
        const findProfile = await this.pModel.findById(id).exec();
        findProfile.email = profile.email;
        findProfile.password = profile.password;
        findProfile.name = profile.name;
        findProfile.about = profile.about;

        return findProfile.save()
    }

    deleteProfile(id: string): Promise<Profile> {
        return this.pModel.findByIdAndRemove(id).exec();
    }
}