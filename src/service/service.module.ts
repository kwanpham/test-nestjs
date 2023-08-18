import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { BankService } from './bank.service';

@Module({
  providers: [UsersService, BankService],
  exports: [UsersService, BankService],
})
export class ServiceModule {}
