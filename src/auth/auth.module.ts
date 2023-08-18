import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ServiceModule } from '../service/service.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ServiceModule,
    JwtModule.register({
      global: true,
      secret: 'hello',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
