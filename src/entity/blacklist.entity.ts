import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'blacklists' })
export class Blacklist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_id?: number;

  @Column()
  address_ip?: string;

  @Column()
  description: string;

  @Column('bigint')
  created_at?: number;

  @Column('bigint')
  updated_at?: number;
}
