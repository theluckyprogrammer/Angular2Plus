
import { Renderer2, OnInit, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { GetGalleryService } from './get-gallery.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public DisplayModal: Boolean;  
  public Images : Array<string>;
  public CurrentImageSrc : string;

  private _currentSlideIndex : number;
  private _lastImageIndex : number;

  get ImagesCount():number {
    return this._lastImageIndex + 1;
}

get CurrentImageNumber():number {
  return this._currentSlideIndex + 1;
}

  constructor(private _getGallery: GetGalleryService)
  { 
    this.Images = _getGallery.GetImages();
    this.DisplayModal = false;
    this._currentSlideIndex = 0;
    this._lastImageIndex = this.Images.length-1;
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

  private SetImageSrc() : void
  {
    this.CurrentImageSrc = this.Images[this._currentSlideIndex];   
  }
}