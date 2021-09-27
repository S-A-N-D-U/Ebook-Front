import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

// Services
import { TestingService} from './Services/testing.service';
import { AuthenticationService } from './Services/authentication.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [TestingService , AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
