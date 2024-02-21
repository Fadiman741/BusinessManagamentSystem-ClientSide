import { Component, OnInit ,Inject, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  @Input() employee: any;
  employeelist: any;
  
constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public  dialogRef: MatDialogRef<any>,private apiservice: ApiService) { }

  ngOnInit() {
    // this.Employeelist();
    this.employeelist = {
      id: 1,
      name: 'John Doe',
      address: '012 Durban, KZN',
      role: 'Manager',
      contactNumber: '0791234567',
      email: 'JohnDoe@gmail.com',
      status: 'Active',
    };
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  Employeelist() {
    this.employeelist = this.apiservice.employees;
    console.log(this.apiservice.employees);
    

  }

}
