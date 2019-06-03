import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SignupService } from './service/signup.service';
import { HttpModule } from '@angular/http';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    SocialLinksComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NguiAutoCompleteModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, },
      { path: 'signup', component: SignupComponent,  },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/login' }
    ], {
        useHash: true
      })
  ],
  providers: [AuthGuard,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
