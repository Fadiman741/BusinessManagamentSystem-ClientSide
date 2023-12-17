import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  totalsales: any;


  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.saleslist();
    this.calculateTotals();
  }

  saleslist() {
    this.totalsales = this.apiservice.salesData;
    console.log(this.totalsales);
  };
  calculateTotals(): { totalUnits: number; totalSales: number } {
    let totalUnits = 0;
    let totalSales = 0;

    this.totalsales.forEach((item: { units: number; sales: number; }) => {
      totalUnits += item.units;
      totalSales += item.sales;
    });

    return { totalUnits, totalSales };
  }


}
