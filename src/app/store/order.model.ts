import { Cart } from "./cart.module";
import { Injectable } from "@angular/core";

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped: boolean = false;

  constructor(public cart: Cart) {}

  clear() {
    this.id = null;
    this.name = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.shipped = null;
    // clear the cart as well
    this.cart.clear();
  }
}
