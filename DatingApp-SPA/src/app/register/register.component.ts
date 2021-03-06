import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_service/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("Register Successful");
      },
      error => {
        console.log("Error while registering: " + error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }
}
