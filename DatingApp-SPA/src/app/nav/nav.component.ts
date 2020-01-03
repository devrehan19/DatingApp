import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("logged in successfully");
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
    console.log(this.model);
  }

  loggedin() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logout() {
    localStorage.removeItem("token");
    console.log("Logged out");
    this.router.navigate(["/home"]);
  }
}
