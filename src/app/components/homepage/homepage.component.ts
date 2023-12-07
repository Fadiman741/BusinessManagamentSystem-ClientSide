import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   loading = true;
currentDate: any;
orderlist: any;
totalPrice: any;
  constructor( private apiservice:ApiService) { }

  ngOnInit() {
    this.Orderlist();
    
    this.currentDate = new Date();

    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
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
  

}
