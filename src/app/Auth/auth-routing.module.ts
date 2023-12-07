import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [

  {
    path: 'auth', component: HomePageComponent,
    children: [
                {path:'',redirectTo:'signin',pathMatch:'full'},
                { path: 'signin', component: SigninComponent  },
                { path: 'signup', component: SignupComponent }
                ]},

  // { path: '', redirectTo: '/homepage', pathMatch: 'full' },  // Redirect to users by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
