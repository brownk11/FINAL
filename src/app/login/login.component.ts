import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from "../models/sharing.service";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name: string;
  password: string;
  apiRoot: string;
  ngOnInit() { }

  constructor(private http: Http, private router: Router, private sharingService: SharingService) {
    this.apiRoot = `//${window.location.hostname}:8081`; //8081
    window.fbAsyncInit = function () {
      FB.init({
        appId: "328510044300406",
        cookie: true,
        xfbml: true,
        version: "v2.11"
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  loginFB() {
    this.sharingService.loginFB();
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    this.sharingService.login(name, password, fbid, picture);


  }
}