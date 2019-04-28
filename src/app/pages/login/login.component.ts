import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginFormData: {
    username: string;
  } = {
    username: ""
  };

  userData: {
    id: number;
    username: string;
  }[] = [];

  constructor(private auth: AuthService, private backend: BackendService) {}

  ngOnInit() {
    this.backend
      .getUsers()
      .then((userData: { id: number; username: string }[]) => {
        this.userData = userData;
      });
  }

  login() {
    this.auth
      .login(this.loginFormData)
      .then(() => {
        console.log("User Logged In");
      })
      .catch(err => {
        console.log(err);
      });
  }
}
