import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-marcas',
  templateUrl: './section-marcas.component.html',
  styleUrls: ['./section-marcas.component.scss']
})
export class SectionMarcasComponent implements OnInit {

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
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: false

    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
