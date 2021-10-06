import { BookCardComponent } from './../book/book-card/book-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class BookModule { }
