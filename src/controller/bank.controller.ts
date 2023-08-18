import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { BankService } from '../service/bank.service';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}
  // @UseGuards(AuthGuard)
  @Get('allbank')
  async getAllBank() {
    return this.bankService.findAllBank();
  }

  @Get('allbankbin')
  async getAllBankBin() {
    return this.bankService.findAllBankBin();
  }
}
