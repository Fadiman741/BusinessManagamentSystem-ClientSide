import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modals/modal.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {


   currentUser: any;
  userType: string = "";

  constructor(private modalService:ModalService,private apiservice:ApiService, private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    // this.apiservice.getLoggedInUserDetails().subscribe(
    //   (response) => {
    //     this.currentUser = response;
    //     console.log(this.currentUser);
    //   },
    //   (error) => {}
    // );
    // this.getUserType();
  }
getUserType(){
    if(this.currentUser.userType == 0){
      return"employee";
    }
    else{
      return "Admin";
    }
  }

  openModal(): void {
      this.modalService.Subscribe();
  }
  getInitials(): string {
    // Get the user's name and surname
    const fullName = "Name Surname"; // Replace this with the actual name retrieved from user details
    const [firstName, lastName] = fullName.split(" ");
    
    // Extract the first letters of the name and surname
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    
    return initials;
  }
  Logout() {
    
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    this.router.navigate(["/"])
    this.toastr.success('You logged out', 'Success');

  }

}
