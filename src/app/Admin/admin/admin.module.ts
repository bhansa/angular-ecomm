import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./../auth/auth.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main ", component: AdminComponent },
  { path: "**", redirectTo: "auth" },
]);

@NgModule({
  declarations: [AdminComponent, AuthComponent],
  imports: [CommonModule, FormsModule, routing],
})
export class AdminModule {}
