import { AdminModule } from "./Admin/admin/admin.module";
import { StorefirstGuard } from "./store/storefirst.guard";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailsComponent } from "./store/cart-details.component";
import { StoreComponent } from "./store/store.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

const routes: Routes = [
  { path: "store", component: StoreComponent, canActivate: [StorefirstGuard] },
  {
    path: "cart",
    component: CartDetailsComponent,
    canActivate: [StorefirstGuard],
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [StorefirstGuard],
  },
  {
    path: "admin",
    loadChildren: () => AdminModule,
    canActivate: [StorefirstGuard],
  },
  { path: "**", redirectTo: "/store" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
