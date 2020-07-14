import { Order } from "./order.model";
import { OrderRepository } from "./../../Model/order.repository";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styles: [
    `
      input.ng-dirty.ng-invalid {
        border: 2px solid #ff0000;
      }
      input.ng-dirty.ng-valid {
        border: 2px solid #6bc502;
      }
    `,
  ],
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  submitted = false;
  constructor(public orderRepositry: OrderRepository, public order: Order) {}

  ngOnInit(): void {}

  // submit order method
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepositry.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
