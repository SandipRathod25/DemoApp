import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  styleUrls: ['./trending.component.less']
})
export class TrendingComponent {
  slides = [
    { img: "../../assets/Assets/slide1.png" },
    { img: "../../assets/Assets/slide2.png" },
    { img: "../../assets/Assets/slide3.png" },
    { img: "../../assets/Assets/slide1.png" },
    { img: "../../assets/Assets/slide2.png" },
    { img: "../../assets/Assets/slide3.png" }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 1000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [

      {
        "breakpoint": 1024,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 427,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "vertical": true
        }
      }
    ]
  }

}
