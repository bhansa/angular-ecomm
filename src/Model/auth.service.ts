import { Observable } from "rxjs";
import { RestdatasourceService } from "./restdatasource.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private dataSource: RestdatasourceService) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }
  get authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }
}
