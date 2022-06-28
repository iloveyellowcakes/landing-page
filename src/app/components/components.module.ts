
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  exports: [
    CardComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
