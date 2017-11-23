import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

import { CarouselGalleryComponent } from './carousel-gallery.component';
import { GetGalleryService } from './get-gallery.service';


@NgModule({
  imports: [
    BrowserModule,
    NgxGalleryModule
  ],
  declarations: [
    CarouselGalleryComponent
  ],
  providers: [ GetGalleryService ],
  bootstrap: [ CarouselGalleryComponent ]
})
export class AppModule { }