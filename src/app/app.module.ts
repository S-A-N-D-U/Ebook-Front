import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// custom modules
import { HomeModule } from './Components/home/home.module';
import { BookModule } from './Components/book/book.module';

// Services
import { TestingService } from './Services/testing.service';
import { AuthenticationService } from './Services/authentication.service';
import { ValidationsService } from './Services/validations.service';

// components
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PublisherListComponent } from './Components/publisher-list/publisher-list.component';
import { PublisherRequestsComponent } from './Components/publisher-requests/publisher-requests.component';
import { ManageAdminsComponent } from './Components/manage-admins/manage-admins.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component';

// interceptors
import { HttpConfigInterceptor } from './Interceptors/http-config.interceptor';
import { PurchaseCoinsComponent } from './Components/purchase-coins/purchase-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PublisherListComponent,
    PublisherRequestsComponent,
    ManageAdminsComponent,
    AddAdminComponent,
    PurchaseCoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BookModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 

  ],
  providers: [
    TestingService ,
    AuthenticationService ,
    ValidationsService ,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
