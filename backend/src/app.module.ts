import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TestController } from './test/test.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Iceiswater@24',
      database: 'clinic',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PassportModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
