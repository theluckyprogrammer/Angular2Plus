import { Injectable } from '@angular/core';
import { GalleryPage } from './gallery-page.dto';

@Injectable()
export class GetGalleryService {

 private _images : Array<string>;

  constructor() { 

 this._images = new Array(
  "/assets/page1/1.jpg",
  "/assets/page1/2.jpg",
  "/assets/page1/3.jpg",
  "/assets/page1/4.jpg",
  "/assets/page1/5.jpg",
  "/assets/page1/6.jpg",
  "/assets/page1/7.jpg",
  "/assets/page1/8.jpg",
  "/assets/page1/9.jpg", 
  "/assets/page1/10.jpg",
  "/assets/page1/11.jpg",
  "/assets/page1/12.jpg",
  "/assets/page1/13.jpg",
  "/assets/page1/14.jpg",
  "/assets/page1/15.jpg",
  "/assets/page1/16.jpg",
  "/assets/page1/17.jpg",
  "/assets/page1/18.jpg",
  "/assets/page1/19.jpg",
  "/assets/page1/20.jpg",
  "/assets/page1/1001.jpg",
  "/assets/page1/1002.jpg",
  "/assets/page1/1003.jpg",
  "/assets/page1/1004.jpg"
);

  }   

  public GetPage(page: number, pageSize: number) : GalleryPage
  {
    var result: GalleryPage = new GalleryPage();
    result.Images = this.GetImages(page, pageSize);
    result.LastPage = Math.ceil(this._images.length / pageSize );
    return result;   
  }

  public GetImages(page, pageSize) : Array<string>
  {    
    var startIndex: number = ((page-1) * pageSize);
    var endIdex: number = page * pageSize - 1;
    return this._images.slice(startIndex, endIdex);
  }

}
