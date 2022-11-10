import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './profiles.controller';
import { ProfileService } from './profiles.service';
import { profileSchema } from './schemas/profile.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'profile', schema: profileSchema }])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}