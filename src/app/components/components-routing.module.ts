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




const routes: Routes = [
  {
    path: '',
    component: HeadersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'users', component: UserComponent },
      { path: 'superadmins', component: SuperAdminComponent },
      { path: 'businessadmins', component: BusinessAdminComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'products', component: ProductComponent },
      { path: 'sales', component: SaleManagerComponent },
      {
        path: 'dashboard',
        component: BusinessDashboardComponent,
        children: [
          { path: '', redirectTo: 'employees', pathMatch: 'full' },
          { path: 'today', component: TodayComponent },
          { path: 'order', component: OrderlistComponent },
          { path: 'employees', component: EmployeesComponent },
          { path: 'stock', component: StockComponent },
          { path: 'cashier', component: CashierComponent },
          { path: 'products', component:ProductComponent}
        ]
      },
      { path: 'cashier', component: CashierComponent }, // Move this line outside of 'dashboard' children
      { path: 'order', component: OrderlistComponent }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
