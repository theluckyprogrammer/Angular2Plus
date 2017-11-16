
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

import { Renderer2, OnInit, Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document)
  {}

  ngOnInit(): void {     

    this.galleryOptions = [
      {
        width: '600px',
        height: '800px',
        thumbnailsColumns: 2,
        thumbnailsRows: 2,

      }
    ];

    let s = this._renderer2.createElement('script');    
    s.text = `
    function openModal() {
      document.getElementById('myModal').style.display = "block";
    }
    
    function closeModal() {
      document.getElementById('myModal').style.display = "none";
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
    `;

    this._renderer2.appendChild(this._document.body, s);
  }
}