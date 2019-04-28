import { Injectable } from "@angular/core";
import { BackendService } from "./backend.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ) {}

  register(user) {
    return this.backend.register(user);
  }

  login(user: { username: string }) {
    console.log("auth1", user);

    return this.backend
      .login(user)
      .then((user: { username: string }) => {
        console.log("authShite2", user);
        return this.session.setSession(user);
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    return this.backend.logout().then(() => {
      return this.session.clearSession();
    });
  }
}
