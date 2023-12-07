import { Component, OnInit ,Inject, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  @Input() employee: any;
  
constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public dialogRef: MatDialogRef<EditUsersComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
