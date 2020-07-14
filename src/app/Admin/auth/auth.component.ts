import { AuthService } from "./../../../Model/auth.service";
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
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        });
    } else {
      this.errorMessage = "worng credentials";
    }
  }
}
