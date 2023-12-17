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
  
constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public dialogRef: MatDialogRef<EditUsersComponent>,private apiservice: ApiService) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  // Employeelist() {
  //   this.employeelist = this.apiservice.employees;
  //   console.log(this.apiservice.employees);
    

  // }

}
