import { OrderRepositry } from "./order.repository";
import { Order } from "./../app/store/order.model";
import { Cart } from "./../app/store/cart.module";
import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDatasource } from "./static.datasource";

@NgModule({
  providers: [ProductRepository, StaticDatasource, Cart, Order, OrderRepositry],
})
export class ModelModule {}
