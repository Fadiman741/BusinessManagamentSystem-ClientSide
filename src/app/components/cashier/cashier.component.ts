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
  order: any;

  constructor(private apiservice: ApiService,private toastr: ToastrService) { }

  ngOnInit() {
    this.Menulist()
  }
  //   addToOrder(item: any): void {
  //   // Add the selected item to the orderList
  //   this.orderList.push(item);
  // }
  Menulist() {
    this.apiservice.getAllMenu().subscribe(
      data => {
        this.menu = data;
        console.log(this.menu);
        this.meal_list = this.menu.filter((item: { category: string; }) => item.category === "meal");
        console.log(this.meal_list);
      
        this.alcohol = this.menu.filter((item: { category: string; }) => item.category === "alcohol");
        console.log(this.alcohol);
      
        this.softdrinks = this.menu.filter((item: { category: string; }) => item.category === "softdrinks");
        console.log(this.softdrinks);
        
      },
      error => {
        console.log(error);
      }
    );
    // console.log(this.menu);
    

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

  // proceedOrder(): void {
  //   const orderNumber = new Date().getTime();
  //   console.log('Placing Order:', { orderNumber, items: this.cart });
  //   this.toastr.success('Data saved successfully', 'Success');
  //   this.cart = [];
  //   this.orderCounter++;
  // }
  proceedOrder(): void {

  const orderData = {
    items: this.cart
  };
   this.apiservice.placeOrder(orderData).subscribe(
    response => {
      this.order = response;
      // console.log(this.order);
      console.log('Order placed successfully:', response);
      this.toastr.success('Data saved successfully', 'Success');
      this.cart = []; // Clear cart only after successful order placement
      this.orderCounter++;
    },
    error => {
      this.toastr.error('Order failed', 'Error');
      console.error('Error placing order:', error);
    }
  );

    // this.apiservice.placeOrder(this.cart).subscribe(
    //   response => {
    //     this.order = response;
    //     console.log(this.order);
    //     console.log('Order placed successfully:', response);
    //     this.toastr.success('Data saved successfully', 'Success');
    //     this.cart = [];
    //     this.orderCounter++;
    //   },
    //   error => {
    //     console.error('Error placing order:', error);
    //   }
    // );
    
  }
  // this.cart = [];
}
