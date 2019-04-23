import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  show: boolean = true;
  dummy: string = "Yummy";
  contacts: {
    id: number;
    name: string;
    mobile: string;
    email: string;
  }[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend
      .getContacts()
      .then(
        (
          contacts: {
            id: number;
            name: string;
            mobile: string;
            email: string;
          }[]
        ) => {
          this.contacts = contacts;
          console.log(contacts);
        }
      );
  }
}
