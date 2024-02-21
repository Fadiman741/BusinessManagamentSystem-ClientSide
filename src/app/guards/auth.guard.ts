import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiservice:ApiService , private router:Router) {}

  canActivate(): boolean {
    if (this.apiservice.isAuthenticated()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['auth/signin']); 
      return false;
    }
  }
}