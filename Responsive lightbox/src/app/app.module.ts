import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { GetGalleryService } from './get-gallery.service';
import { EmptyArray } from './EmptyArray.pipe'

@NgModule({
  imports: [
    BrowserModule,
    NgxGalleryModule
  ],
  declarations: [
    AppComponent,
    EmptyArray
  ],
  providers: [ GetGalleryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }