import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/service.module';
import { AuthController } from './controller/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.160.89.20',
      port: 3306,
      username: 'root',
      password: 'lilama1996',
      database: 'bank',
      autoLoadEntities: true,
      synchronize: false,
    }),
    AuthModule,
    ServiceModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
