import { Cart } from "./../app/store/cart.module";
import { AuthService } from "./auth.service";
import { RestdatasourceService } from "./restdatasource.service";
import { Order } from "./../app/store/order.model";
import { OrderRepository } from "./order.repository";
import { StaticDatasource } from "./static.datasource";
import { ProductRepository } from "./product.repository";
import { NgModule } from "@angular/core";

@NgModule({
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDatasource, useClass: RestdatasourceService },
    RestdatasourceService,
    AuthService,
  ],
})
export class ModelModule {}
