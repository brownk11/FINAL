import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
        { path: "user", component: UserComponent },
        { path: "home", component: IndexComponent },
        { path: "foot", component: FooterComponent },
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
