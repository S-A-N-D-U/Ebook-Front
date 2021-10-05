import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { PublisherListComponent } from './Components/publisher-list/publisher-list.component';
import { PublisherRequestsComponent } from './Components/publisher-requests/publisher-requests.component';


const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: 'register' , component:RegisterComponent},
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'publisherList' , component:PublisherListComponent},
  { path: 'publisherRequests' , component:PublisherRequestsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
