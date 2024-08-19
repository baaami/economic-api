import { CommonEntity } from 'src/api/common/entity/common.entity';
import { Context } from 'src/api/context/entity/context.entity';
import { Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'economic_context', name: 'stocks' })
export class Stock extends CommonEntity {
  @PrimaryColumn({ type: 'varchar', name: 'stock_symbol', length: 20 })
  stockSymbol: string;

  @OneToMany(() => Context, (context) => context.stock)
  contexts: Context[];
}
