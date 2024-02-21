import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupForm!: NgForm;

  constructor(private apiservice:ApiService , private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(form: NgForm) {
    if (form.valid) {
      const user = {
        first_name: form.value.firstName,
        last_name: form.value.lastName,
        email: form.value.email,
        password: form.value.password
        
      };

      this.apiservice.register(user).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Handle successful registration, e.g., show a success message to the user
          this.router.navigate(["/"])

          form.resetForm();
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration error, e.g., display an error message to the user
        }
        
      );
      
    }
  }

}
