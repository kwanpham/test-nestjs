import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { BankController } from './bank.controller';
import { AuthModule } from '../auth/auth.module';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [AuthModule, ServiceModule],
  providers: [],
  exports: [],
  controllers: [AuthController, BankController],
})
export class ControllerModule {}
