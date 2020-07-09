import { Product } from "./../../Model/Product.model";
import { Injectable } from "@angular/core";
@Injectable()
export class Cart {
  public Lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  addLine(product: Product, quantity: number = 1) {
    const line = this.Lines.find((line) => line.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.Lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.Lines.find((l) => l.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    const index = this.Lines.findIndex((line) => (line.product.id = id));
    this.Lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.Lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.Lines.forEach((l) => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.product.price;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}
  get lineTotal() {
    return this.product.price * this.quantity;
  }
}
