import { Cart } from "./cart.module";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart-details",
  templateUrl: "./cart-details.component.html",
  styles: [],
})
export class CartDetailsComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit(): void {}
}
