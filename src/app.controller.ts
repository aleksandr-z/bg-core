import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './resources/auth/local-auth.guard';
import { AuthService } from './resources/auth/auth.service';
import { JwtAuthGuard } from './resources/auth/jwt-auth.guard';

@Controller('')
export class AppController {
  constructor(private authService: AuthService) {}
  @Get()
  async main() {
    return 'main';
  }

  @UseGuards(JwtAuthGuard)
  @Get('/test')
  async test() {
    return 'test';
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
