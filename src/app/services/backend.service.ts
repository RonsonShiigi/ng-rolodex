import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  url: string = "http://localhost:4200";

  constructor(private http: HttpClient) {}

  getContacts() {
    const endpoint = this.url + "/api/contacts";
    return this.http.get(endpoint).toPromise();
  }
}
