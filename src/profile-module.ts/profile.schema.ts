import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
    @Prop({required: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    about: string
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);