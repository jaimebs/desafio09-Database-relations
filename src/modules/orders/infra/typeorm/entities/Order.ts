import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.order, {
    cascade: ['insert'],
  })
  @JoinColumn()
  order_products: OrdersProducts[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default Order;
