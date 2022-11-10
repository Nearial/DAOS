import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profiles.module'

@Module({
  imports: [ProfileModule, MongooseModule.forRoot('mongodb://localhost:27017/profiles')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
