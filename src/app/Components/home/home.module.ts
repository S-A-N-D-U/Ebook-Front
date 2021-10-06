import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BookModule } from '../book/book.module';


@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent,
    HomePageComponent,
    CarouselComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    BookModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
