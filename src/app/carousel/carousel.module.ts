import { CarouselComponent } from './carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
