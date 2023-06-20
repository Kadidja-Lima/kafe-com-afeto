import { Component } from '@angular/core';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent {
  faMapLocationDot = faMapLocationDot;
  faCreditCard = faCreditCard;
  faMedal = faMedal;
  faWhatsapp = faWhatsapp;
  faStar = faStar;
  activeSlideIndex: number = 0;

  constructor() { }
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }



  setActiveSlideIndex(index: number) {
    this.activeSlideIndex = index;
  }
}

