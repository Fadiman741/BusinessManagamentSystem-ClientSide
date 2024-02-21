import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomePageComponent } from '../Auth/home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { BusinessAdminComponent } from './business-admin/business-admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { SaleManagerComponent } from './sale-manager/sale-manager.component';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodayComponent } from './today/today.component';
import { CashierComponent } from './cashier/cashier.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { EmployeesComponent } from './employees/employees.component';
import { StockComponent } from './stock/stock.component';
import { HeadersComponent } from './headers/headers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodolistComponent } from './todolist/todolist.component'
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
  {

    path: '',
    component: HeadersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent,canActivate: [AuthGuard] },
      { path: 'users', component: UserComponent ,canActivate: [AuthGuard]},
      { path: 'superadmins', component: SuperAdminComponent ,canActivate: [AuthGuard] },
      { path: 'businessadmins', component: BusinessAdminComponent ,canActivate: [AuthGuard]},
      { path: 'employees', component: EmployeeComponent ,canActivate: [AuthGuard] },
      { path: 'products', component: ProductComponent ,canActivate: [AuthGuard]},
      { path: 'sales', component: SaleManagerComponent ,canActivate: [AuthGuard]},
      { path: 'business-registration', component:BusinessRegistrationComponent ,canActivate: [AuthGuard]},
      
      {
        path: 'dashboard',
        component: BusinessDashboardComponent,
        children: [
          { path: '', redirectTo: 'employees', pathMatch: 'full' },
          { path: 'today', component: TodayComponent ,canActivate: [AuthGuard] },
          { path: 'order', component: OrderlistComponent ,canActivate: [AuthGuard]},
          { path: 'employees', component: EmployeesComponent ,canActivate: [AuthGuard]},
          { path: 'stock', component: StockComponent ,canActivate: [AuthGuard]},
          { path: 'cashier', component: CashierComponent ,canActivate: [AuthGuard]},
          { path: 'products', component: ProductComponent ,canActivate: [AuthGuard]},
          {path: 'todo-list', component:TodolistComponent ,canActivate: [AuthGuard]}
        ]
      },
      { path: 'cashier', component: CashierComponent ,canActivate: [AuthGuard]}, 
      { path: 'order', component: OrderlistComponent ,canActivate: [AuthGuard]},
      // {path:"**", component: PagenotfoundComponent},
    ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
