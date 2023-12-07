import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { ModalService } from 'src/app/modals/modal.service';
import { MatDialog  } from '@angular/material/dialog';

import { ViewOrderComponent } from 'src/app/modals/view-order/view-order.component';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderlist: any;
  closedOrderList: any;
  constructor(private apiservice: ApiService, private modalService: ModalService) { }

  ngOnInit() {
    this.Orderlist();
  }
  Orderlist() {
    this.orderlist = this.apiservice.OpenOders;
    console.log(this.apiservice.OpenOders);
    console.log(this.orderlist)
  }
  calculateTotalPrice(): number {
    let totalPrice = 0;

    for (const item of this.orderlist) {
      totalPrice += item.price
    }

    return totalPrice;
  }

    openModal(item:any): void {
      this.modalService.ViewOrder(item);
    }
  
  
    closeOrder(item: any): void {
      this.orderlist = this.apiservice.OpenOders;
    const index = this.orderlist.indexOf(item);

    if (index !== -1) {
      const closedorder = this.orderlist.splice(index, 1);
      this.closedOrderList.push(closedorder);

    }
  }
  
}
