import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// custom modules
import { HomeModule } from './Components/home/home.module';
import { BookModule } from './Components/book/book.module';

// Services
import { TestingService } from './Services/testing.service';
import { AuthenticationService } from './Services/authentication.service';
import { ValidationsService } from './Services/validations.service'

// components
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BookModule,
    ToastrModule.forRoot() 

  ],
  providers: [TestingService , AuthenticationService , ValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
