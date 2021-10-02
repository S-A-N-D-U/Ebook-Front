import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestingService} from './Services/testing.service';
import { PageBodyComponent } from './page-body/page-body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageFooterComponent } from './page-footer/page-footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageBodyComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    

  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
