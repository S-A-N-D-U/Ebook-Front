import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Services
import { TestingService } from './Services/testing.service';
import { AuthenticationService } from './Services/authentication.service';
import { ValidationsService } from './Services/validations.service'

// components
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PublisherListComponent } from './Components/publisher-list/publisher-list.component';
import { PublisherRequestsComponent } from './Components/publisher-requests/publisher-requests.component';
import { ManageAdminsComponent } from './Components/manage-admins/manage-admins.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PublisherListComponent,
    PublisherRequestsComponent,
    ManageAdminsComponent,
    AddAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 

  ],
  providers: [TestingService , AuthenticationService , ValidationsService , {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
