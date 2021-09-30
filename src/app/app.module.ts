import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

// Services
import { TestingService} from './Services/testing.service';
import { AuthenticationService } from './Services/authentication.service';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [TestingService , AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
