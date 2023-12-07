import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modals/modal.service';
import { ApiService } from 'src/app/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  meal_list: any;
  alcohol: any;
  softdrinks: any;
  menu: any;

  constructor(private modalService: ModalService,private apiservice: ApiService) { }

  ngOnInit() {
    this.Menulist()
  }
  openModal(): void {
      this.modalService.AddMenu();
  }
  Menulist() {
    this.menu = this.apiservice.Menu;
    console.log(this.apiservice.Menu);
    this.meal_list = this.apiservice.Menu.filter(item => item.category === "meal");
    console.log(this.meal_list);
    this.alcohol = this.apiservice.Menu.filter(item => item.category === "alcohol");
    this.softdrinks = this.apiservice.Menu.filter(item => item.category === "softdrinks");

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}
