import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ,public dialogRef: MatDialogRef<ViewOrderComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
    calculateTotalPrice(cart: any[]): number {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

}
