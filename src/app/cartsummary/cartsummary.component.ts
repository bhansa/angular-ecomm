import { Cart } from "./../store/cart.module";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cartsummary",
  templateUrl: "./cartsummary.component.html",
  styleUrls: ["./cartsummary.component.scss"],
})
export class CartsummaryComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit(): void {}
}
