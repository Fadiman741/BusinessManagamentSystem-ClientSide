import { Injectable } from '@angular/core';
import { MatDialog ,MatDialogRef,  } from '@angular/material/dialog';
import {ViewOrderComponent} from './view-order/view-order.component'
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { SubscribeModalComponent } from './subscribe-modal/subscribe-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor( public dialog: MatDialog) {}

  ViewOrder(orderData: any): void {
    const dialogRef =  this.dialog.open(ViewOrderComponent, {
      width: '650px',
      data: orderData,
      // height: '500px',
      // data: { title, message },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }
  EditUsers(userData: any): void {
    const dialogRef =  this.dialog.open(EditUsersComponent, {
      width: '900px',
      data: userData,
      // height: '500px',
      // data: { title, message },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }
  AddMenu(): void {
    const dialogRef =  this.dialog.open(AddMenuComponent, {
      width: '600px',
     
      // height: '500px',
      // data: { title, message },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }
  Subscribe(): void {
    const dialogRef =  this.dialog.open(SubscribeModalComponent , {
      width: '1200px',
     
      // height: '500px',
      // data: { title, message },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }
}