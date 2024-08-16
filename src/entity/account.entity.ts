import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  email_verified: boolean;

  @Column()
  salt: Buffer;

  @Column()
  hash: Buffer;

  @Column('bigint')
  created_at?: number;

  @Column('bigint')
  updated_at?: number;

  @Column('bigint')
  deleted_at?: number;
}
