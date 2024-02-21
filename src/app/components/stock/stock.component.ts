import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [DatePipe], // Add DatePipe to providers
})
export class StockComponent implements OnInit {

  // totalsales: any;
  currentDate: any;

  totalsales: any[] = []; // Assuming you have initial sales data


  filteredSales:any// Updated sales data based on date filter
  startDate:any;
  endDate:any;


  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.saleslist()
    const today = new Date();
    this.startDate = this.formatDate(today);
    this.endDate = this.formatDate(today);
    this.filterSales(); // Initial filter based on today's date
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
  filterSales() {
    // Filter sales based on start and end date
    this.filteredSales = this.totalsales.filter(item => {
      const saleDate = new Date(item.saleDate); // Replace 'saleDate' with your actual date property
      return saleDate >= new Date(this.startDate) && saleDate <= new Date(this.endDate);
    });
  }

  formatDate(date: Date): string {
    // Format date as 'YYYY-MM-DD' (same as input type 'date' format)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
