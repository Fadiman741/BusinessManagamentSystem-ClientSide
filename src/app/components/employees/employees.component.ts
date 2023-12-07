import { Component, OnInit } from '@angular/core';
// import { faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/modals/modal.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  // faCoffee = faCoffee;
  // faPenSquare = faPenSquare;
  checked= false;

  showDropdown = false;
item: any;
  employeelist: any;
  constructor(private apiservice: ApiService, private modalService: ModalService) { }

  ngOnInit() {
    this.Employeelist();
  }
  onDeletePost = (postId: any) =>{
    console.log("User deleted")
  }
    editItem(id:number) {
    // Implement your edit logic here
    console.log('Edit item clicked');
    }
  openModal(item:any): void {
      this.modalService.EditUsers(item);
  }
  Employeelist() {
    this.employeelist = this.apiservice.employees;
    console.log(this.apiservice.employees);
    

  }

}
