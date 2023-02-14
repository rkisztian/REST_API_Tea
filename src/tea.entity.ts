import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Tea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipus: string;

  @Column()
  iz: string;

  @Column()
  ar: string;
}
