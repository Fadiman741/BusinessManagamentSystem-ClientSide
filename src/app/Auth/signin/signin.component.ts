import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private apiservice:ApiService , private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSignInSubmit(form: any) {
      if (form.valid) {
        const user = {
          email: form.value.email,
          password: form.value.password
          
        };
  
        this.apiservice.login(user).subscribe(
          (response) => {
            this.toastr.success('logged in successfully', 'Success');
            console.log('login successful:', response);
            
            localStorage.setItem('loggedInUser',user.email)
            localStorage.setItem('token',response.token)

            
            this.router.navigate(["/home"])

          },
          (error) => {
            this.toastr.error('logged in failed', 'failed');
            console.error('login failed:', error);
          }
          
        );
      }
    }


}
