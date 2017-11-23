import { Renderer2, OnInit, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { GetGalleryService } from './get-gallery.service'
import { GalleryPage } from './galleryPage';
import { EmptyArray } from './EmptyArray.pipe';
import {ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {

  public DisplayModal: Boolean;  
  public Images : Array<string>;
  public CurrentImageSrc : string;

  private _currentSlideIndex : number;
  private _lastImageIndex : number;

  public CurrentPage: number = 1;
  public LastPage: number = 1;
  private _pageSize: number = 10;


  get ImagesCount():number {
    return this._lastImageIndex + 1;
}

get CurrentImageNumber():number {
  return this._currentSlideIndex + 1;
}

  constructor(private _getGallery: GetGalleryService)
  { 
    
    this.ChangePage();

    var testPipe = new EmptyArray().transform(8);
  } 

  ShowModal(show: boolean):void {
    this.DisplayModal = show;
  }

  CurrentSlide(slideIndex: number)
  {    
    this._currentSlideIndex = slideIndex;
    this.SetImageSrc();
  }

  NextSlide()
  {
    this._currentSlideIndex =  this._currentSlideIndex + 1 > this._lastImageIndex ? 0 : this._currentSlideIndex + 1;
    this.SetImageSrc();
  }

  PrevSlide()
  {
    this._currentSlideIndex =  this._currentSlideIndex === 0 ? this._lastImageIndex : this._currentSlideIndex - 1;
    this.SetImageSrc();
  }

  SetImageSrc() : void
  {
    this.CurrentImageSrc = this.Images[this._currentSlideIndex];   
  }  

  ChangePage()
  {
    var page: GalleryPage = this._getGallery.GetPage(this.CurrentPage, this._pageSize);
    this.Images = page.Images;
    this.DisplayModal = false;
    this._currentSlideIndex = 0;
    this._lastImageIndex = page.LastImageIndex;
    this.LastPage = page.LastPage;
  }

}