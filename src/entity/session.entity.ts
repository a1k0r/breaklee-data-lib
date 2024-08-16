import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sessions' })
export class Session {
  @PrimaryColumn()
  account_id?: number;

  @Column()
  online: boolean;

  @Column()
  session_key: string;

  @Column()
  session_ip?: number;

  @Column('bigint')
  session_at?: number;

  @Column('bigint')
  created_at?: number;

  @Column('bigint')
  updated_at?: number;
}