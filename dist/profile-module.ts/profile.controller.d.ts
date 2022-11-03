import { ProfileService } from './profile.service';
import { Request } from 'express';
import { Profile } from './profile.schema';
export declare class ProfileController {
    private readonly pService;
    constructor(pService: ProfileService);
    getProfiles(request: Request): Promise<Profile[]>;
    deleteProfile(id: string): Promise<Profile>;
    createProfile(body: any): Promise<Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProfile(id: string, body: any): Promise<Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
