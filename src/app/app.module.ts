import { FormsModule } from "@angular/forms";
import { AdminModule } from "./Admin/admin/admin.module";
import { StoreModule } from "./store/store.module";
import { ModelModule } from "./../Model/Model.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartsummaryComponent } from "./cartsummary/cartsummary.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    StoreModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
