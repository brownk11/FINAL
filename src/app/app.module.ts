import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { LoginComponent } from './login/login.component';
import { SharingService } from './models/sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    WorkoutsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot([
        { path: "user", component: UserComponent },
        { path: "home", component: IndexComponent },
        { path: "foot", component: FooterComponent },
        { path: "workout", component: WorkoutsComponent },
        { path: "login", component: LoginComponent },
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [LoginComponent, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
