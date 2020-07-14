import { Order } from "./../app/store/order.model";
import { Observable } from "rxjs";
import { StaticDatasource } from "./static.datasource";
import { Injectable } from "@angular/core";
@Injectable()
export class OrderRepository {
  private order: Order[] = [];
  constructor(private staticDatasource: StaticDatasource) {}
  getOrders(): Order[] {
    return this.order;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.staticDatasource.saveOrder(order);
  }
}
