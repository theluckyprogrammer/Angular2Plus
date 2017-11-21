import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { GetGalleryService } from './get-gallery.service';

@NgModule({
  imports: [
    BrowserModule,
    NgxGalleryModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ GetGalleryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }