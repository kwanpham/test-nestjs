import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { AchBank } from './ach_bank.entity';

@Entity('ach_bank_bin')
export class AchBankBin {
  @PrimaryColumn({ name: 'bin_id' })
  binId: string;

  @Column({ name: 'bic_code' })
  bicCode: string;

  @ManyToOne(() => AchBank)
  @JoinColumn({ name: 'bic_code', referencedColumnName: 'bicCode' })
  achBank: AchBank;
}
