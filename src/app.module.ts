import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { AuthService } from './resources/auth/auth.service';
import { UsersModule } from './resources/users/users.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
