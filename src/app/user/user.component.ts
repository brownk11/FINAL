import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { SharingService } from "../models/sharing.service";
import { Exercise } from "../models/Exercise";
declare const FB: any;
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  me: Person;
  constructor(
    private http: Http,
    private router: Router,
    private share: SharingService
  ) {}

  ngOnInit() {
    if (this.share.me == null) {
      this.router.navigate(["/login"]);
    }
    this.me = this.share.me;
    console.log("MyExercise: = "+this.me.myExercises);
  }

  update() { }

  
  logout() {
    
    this.share.me = null;
    this.router.navigate(["/login"]);
  }
}
