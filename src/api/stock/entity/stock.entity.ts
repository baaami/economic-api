import { CommonEntity } from 'src/api/common/entity/common.entity';
import { Context } from 'src/api/context/entity/context.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'economic_context', name: 'stocks' })
export class Stock extends CommonEntity {
  @PrimaryColumn({ type: 'varchar', name: 'stock_symbol', length: 20 })
  stockSymbol: string;

  @Column({ type: 'number', name: 'stock_price' })
  stockPrice: number;

  @Column({ type: 'number', name: 'stock_offset' })
  stockOffset: number;

  @Column({ type: 'varchar', name: 'stock_description', length: 300 })
  stockDescription: string;

  @Column({ type: 'varchar', name: 'stock_CEO', length: 50 })
  stockCEO: string;

  @Column({ type: 'varchar', name: 'stock_founded', length: 50 })
  stockFounded: string;

  @OneToMany(() => Context, (context) => context.stock)
  contexts: Context[];
}
