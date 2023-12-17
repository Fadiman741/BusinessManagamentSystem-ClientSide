import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  orderList: any;
  menu: any;
  meal_list: any;
  alcohol: any;
  softdrinks: any;
  cartList: any;

  cart: any[] = [];
  orderCounter = 1;

  constructor(private apiservice: ApiService,private toastr: ToastrService) { }

  ngOnInit() {
    this.Menulist()
  }
  //   addToOrder(item: any): void {
  //   // Add the selected item to the orderList
  //   this.orderList.push(item);
  // }
  Menulist() {
    this.menu = this.apiservice.Menu;
    console.log(this.apiservice.Menu);
    this.meal_list = this.apiservice.Menu.filter(item => item.category === "meal");
    this.alcohol = this.apiservice.Menu.filter(item => item.category === "alcohol");
    this.softdrinks = this.apiservice.Menu.filter(item => item.category === "softdrinks");

  }
  addToOrder(item: any): void {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Item already exists in the cart, increase quantity
      existingItem.quantity++;
    } else {
      // Item doesn't exist in the cart, add it
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  removeFromCart(cartItem: any): void {
    const index = this.cart.indexOf(cartItem);

    if (index !== -1) {
      // If the item is found, decrease quantity
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        // If quantity is 1, remove the item from the cart
        this.cart.splice(index, 1);
      }
    }
  }

  calculateTotalPrice(cart: any[]): number {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    const orderNumber = new Date().getTime();
    // Handle placing the order, e.g., send the order to a backend service
    console.log('Placing Order:', { orderNumber, items: this.cart });
    this.toastr.success('Data saved successfully', 'Success');
    
    // Clear the cart after placing the order
    this.cart = [];
    this.orderCounter++;
  }
}
