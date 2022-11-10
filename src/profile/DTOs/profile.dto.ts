import { IsString } from 'class-validator';

export class ProfileDTO {
    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly about: string;
}