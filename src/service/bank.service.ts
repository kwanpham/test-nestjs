import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { AchBank } from '../entity/ach_bank.entity';
import { AchBankBin } from '../entity/ach_bank_bin.entity';

// This should be a real class/interface representing a user entity
@Injectable()
export class BankService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  // async findOne(username: string): Promise<UserDto> {
  //   return this.users.find((user) => user.username === username);
  // }

  async findAllBank() {
    const achBanks = await this.entityManager.find(AchBank);

    if (!achBanks)
      throw new NotFoundException('errorMessages.product.notFound');

    return achBanks;
  }

  async findAllBankBin() {
    const achBankBins = await this.entityManager.find(AchBankBin);

    if (!achBankBins)
      throw new NotFoundException('errorMessages.product.notFound');

    return achBankBins;
  }
}
