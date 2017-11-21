import { Injectable } from '@angular/core';

@Injectable()
export class GetGalleryService {

  constructor() { }   

  public GetImages() : string[]
  {
    return new Array(
      "/assets/page1/1.jpg",
      "/assets/page1/2.jpg",
      "/assets/page1/3.jpg",
      "/assets/page1/4.jpg",
      "/assets/page1/5.jpg",
      "/assets/page1/6.jpg",
      "/assets/page1/7.jpg",
      "/assets/page1/8.jpg",
    );
  }

}
