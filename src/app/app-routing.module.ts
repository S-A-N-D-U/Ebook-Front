import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { PublisherListComponent } from './Components/publisher-list/publisher-list.component';
import { PublisherRequestsComponent } from './Components/publisher-requests/publisher-requests.component';
import { ManageAdminsComponent } from './Components/manage-admins/manage-admins.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component';
import { PurchaseCoinsComponent } from './Components/purchase-coins/purchase-coins.component';
import { MyPaymentsComponent } from './Components/my-payments/my-payments.component';
import { AllPaymentsComponent } from './Components/all-payments/all-payments.component';


const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: 'register' , component:RegisterComponent},
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'publisherList' , component:PublisherListComponent},
  { path: 'publisherRequests' , component:PublisherRequestsComponent},
  { path: 'manageAdmins' , component:ManageAdminsComponent},
  { path: 'addAdmin' , component:AddAdminComponent},
  { path: 'manageCoins' , component:PurchaseCoinsComponent},
  { path: 'myPayments' , component:MyPaymentsComponent},
  { path: 'allPayments' , component:AllPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
