import { Order } from "./../app/store/order.model";
import { Product } from "./Product.model";
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDatasource {
  private products: Product[] = [
    new Product(
      1,
      "Flycom Lace UpShoe",
      "category 1",
      "Sneaker Shoe(category 1)",
      12344
    ),
    new Product(
      2,
      "Rebook Watch",
      "category 2",
      "Rebook Shoe(category 2)",
      2344
    ),
    new Product(
      3,
      " Washing Machine",
      "category 3",
      "Washing Machine(category 3)",
      12344
    ),
    new Product(4, "Hp Laptop", "category 4", "Hp Laptop(category 4)", 32344),
    new Product(
      5,
      "FastTrack watch",
      "category 2",
      "FastTrack watch(category 2)",
      3344
    ),
    new Product(
      6,
      "Rebook Slipper",
      "category 1",
      "Rebook Slipper(category 1)",
      5344
    ),
    new Product(7, "Fridge LG", "category 3", "Fridge LG(category 3)", 72344),
    new Product(8, "Zara Watch", "category 2", "Zara Watch(category 2)", 8144),
    new Product(
      9,
      "Woodlands Shoe",
      "category 1",
      "Woodlands Shoe(category 1)",
      6344
    ),
    new Product(
      10,
      "Lenovo Laptop",
      "category 4",
      "Lenovo Laptop(category 4)",
      342344
    ),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
