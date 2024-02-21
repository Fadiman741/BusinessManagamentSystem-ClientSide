import { ViewOrderComponent } from './../modals/view-order/view-order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './components-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'




// import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SaleManagerComponent } from './sale-manager/sale-manager.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { BusinessAdminComponent } from './business-admin/business-admin.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CashierComponent } from './cashier/cashier.component';
import { HeadersComponent } from './headers/headers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditUsersComponent } from '../modals/edit-users/edit-users.component';
import { StockComponent } from './stock/stock.component';
import { TodolistComponent } from './todolist/todolist.component';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
    }),
    // FormsModule,
  ],

  declarations: [UserComponent ,SuperAdminComponent,SaleManagerComponent,ProductComponent,EmployeeComponent,BusinessDashboardComponent,BusinessAdminComponent,OrderlistComponent,ViewOrderComponent,CashierComponent,HeadersComponent,HomepageComponent,EmployeesComponent,EditUsersComponent, ProductComponent,StockComponent,TodolistComponent,BusinessRegistrationComponent ]
})

export class ComponentsModule { }
