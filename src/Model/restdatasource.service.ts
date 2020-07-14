import { Order } from "./../app/store/order.model";
import { Product } from "./Product.model";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RestdatasourceService {
  PROTOCOL = "http";
  PORT = 4210;
  baseUrl: string;
  auth_token: string;
  // HttpClientModule should add it in app.module.ts
  constructor(private http: HttpClient) {
    this.baseUrl = `${this.PROTOCOL}://${location.hostname}:${this.PORT}/`;
  }

  // http://localhost:4210/products --get
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  // http://localhost:4210/orders --post --payload
  saveOrder(order: Order) {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + "login", {
        name: user,
        password: pass,
      })
      .pipe(
        retry(3),
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          return response.success;
        }),
        catchError((err) => {
          console.log(err);
          return of([]);
        })
      );
  }

  /*
  ::: admin methods :::
    saveproduct
    updateProduct
    deleteProduct
    getOptions
    getOrders
    updateOrder
    deleteOrder
  */
}
