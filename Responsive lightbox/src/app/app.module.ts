import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

import { SimpleGalleryComponent } from './simple-gallery.component';
import { GetGalleryService } from './get-gallery.service';
import { EmptyArray } from './empty-array.pipe'

@NgModule({
  imports: [
    BrowserModule,
    NgxGalleryModule
  ],
  declarations: [
    SimpleGalleryComponent,
    EmptyArray
  ],
  providers: [ GetGalleryService ],
  bootstrap: [ SimpleGalleryComponent ]
})
export class AppModule { }