import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  cars = [ 
    { id: 1, name: "BMW Hyundai" }, 
    { id: 2, name: "Kia Tata" }, 
    { id: 3, name: "Volkswagen Ford" }, 
    { id: 4, name: "Renault Audi" }, 
    { id: 5, name: "Mercedes Benz Skoda" }, 
  ]; 
  selected = [{ id: 3, name: "Volkswagen Ford" }]; 

  constructor() { }

  ngOnInit() {
  }

}
