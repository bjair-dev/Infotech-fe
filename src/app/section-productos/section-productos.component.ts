import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-productos',
  templateUrl: './section-productos.component.html',
  styleUrls: ['./section-productos.component.scss']
})
export class SectionProductosComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    autoplay:false,
    autoplayTimeout:4,
    autoplayHoverPause:false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true

    
  }

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
