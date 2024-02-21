import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

elected = [{ id: 3, name: "Volkswagen Ford" }]; 

   @ViewChild('menuForm') menuForm!: NgForm;

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  AddMenu(form: NgForm) {
    if (form.valid) {
      const menu = {
        name: form.value.Name,
        Description: form.value.Description,
        Price: form.value.Price,
        Category: form.value.Category,
        img: form.value.img
      };
      this.apiservice.create_Menu(menu).subscribe(
        (response) => {
          console.log('Menu Added successful:', response);
          form.resetForm();
        },
        (error) => {
          console.error('Menu  failed:', error);
        }
        
      );

    }
  }
}
