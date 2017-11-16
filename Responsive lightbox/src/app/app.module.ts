import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxGalleryModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }