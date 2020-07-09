import { RouterModule } from "@angular/router";
import { CheckoutComponent } from "./checkout.component";
import { CartDetailsComponent } from "./cart-details.component";
import { CartsummaryComponent } from "./../cartsummary/cartsummary.component";
import { ProductRepository } from "./../../Model/product.repository";
import { Product } from "./../../Model/Product.model";
import { StoreComponent } from "./store.component";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "./../../Model/Model.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// @Component({
//   selector: "app-store",
//   templateUrl: "./store.component.html",
//   styleUrls: ["./store.component.scss"],
// })

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CartsummaryComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
