import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl("/admin/main");
    } else {
      this.errorMessage = "worng credentials";
    }
  }
}
