import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { AchBankBin } from './ach_bank_bin.entity';

@Entity('ach_bank')
export class AchBank {
  @PrimaryColumn({ name: 'bic_code' })
  bicCode: string;

  @Column({ name: 'bank_id', unique: true })
  bankId: string;

  @Column({ name: 'bank_name', unique: true })
  bankName: string;

  @Column({ name: 'bank_name_vn' })
  bankNameVn: string;

  @Column({ name: 'ben_id', unique: true })
  benId: string;

  @OneToMany(() => AchBankBin, (achBankBin) => achBankBin.achBank, {
    eager: true,
  })
  achBankBins: AchBankBin[];
}
