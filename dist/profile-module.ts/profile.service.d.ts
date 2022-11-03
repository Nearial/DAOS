import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './profile.schema';
export declare class ProfileService {
    private pModel;
    constructor(pModel: Model<ProfileDocument>);
    getProfiles(): Promise<Profile[]>;
    createProfile(profile: any): Promise<Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProfile(id: string, profile: Profile): Promise<Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteProfile(id: string): Promise<Profile>;
}
