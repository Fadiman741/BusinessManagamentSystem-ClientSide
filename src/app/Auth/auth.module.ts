import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HomePageComponent} from './home-page/home-page.component'
import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [SignupComponent,SigninComponent,HomePageComponent]
})
export class AuthModule { }
