import { Renderer2, OnInit, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { GetGalleryService } from './get-gallery.service'
import { GalleryPage } from './gallery-page.dto';
import { EmptyArray } from './empty-array.pipe';
import {ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'simple-gallery',
  templateUrl: './simple-gallery.html',
  styleUrls: ['./simple-gallery.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SimpleGalleryComponent {

  public CurrentImageSrc : string;
  public CurrentPage: number = 1;
  public DisplayModal: Boolean;  
  public Images : Array<string>;
  public LastPage: number = 1;  

  private currentSlideIndex : number;
  private lastImageIndex : number;
  private pageSize: number = 10;


  get ImagesCount():number {
    return this.lastImageIndex + 1;
}

get CurrentImageNumber():number {
  return this.currentSlideIndex + 1;
}

  constructor(private _getGallery: GetGalleryService)
  {     
    this.ChangePage();
  } 

  ShowModal(show: boolean):void {
    this.DisplayModal = show;
  }

  CurrentSlide(slideIndex: number)
  {    
    this.currentSlideIndex = slideIndex;
    this.SetImageSrc();
  }

  NextSlide()
  {
    this.currentSlideIndex =  this.currentSlideIndex + 1 > this.lastImageIndex ? 0 : this.currentSlideIndex + 1;
    this.SetImageSrc();
  }

  PrevSlide()
  {
    this.currentSlideIndex =  this.currentSlideIndex === 0 ? this.lastImageIndex : this.currentSlideIndex - 1;
    this.SetImageSrc();
  }

  SetImageSrc() : void
  {
    this.CurrentImageSrc = this.Images[this.currentSlideIndex];   
  }  

  ChangePage()
  {
    var page: GalleryPage = this._getGallery.GetPage(this.CurrentPage, this.pageSize);
    this.Images = page.Images;
    this.DisplayModal = false;
    this.currentSlideIndex = 0;
    this.lastImageIndex = page.LastImageIndex;
    this.LastPage = page.LastPage;
  }

}