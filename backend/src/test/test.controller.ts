// test/test.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('test')
export class TestController {
  
  @Get('secure')
  getSecureData() {
    return { message: '🎉 You accessed a protected route!' };
  }
}
