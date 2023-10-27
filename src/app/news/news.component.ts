import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  styleUrls: ['./news.component.less']
})
export class NewsComponent {
  slides = [
    { img: "../../assets/Assets/mountain.jpg" },
    { img: "../../assets/Assets/mountain2.jpg" },
    { img: "../../assets/Assets/mountain3.jpg" }
  ];
  moreNews = [
    { text: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.", t2: "2m ago" },
    { text: "Paresen cepsum color sit amit, ipsum labour licious mel id, ad had packeting.", t2: "3hr ago" },
    { text: "Jacson Laskie dolor sit maker, making luast longest mel id, ad mad appareat.", t2: "1hr ago" },
  ]
  count = 0;
  currentNews = this.moreNews[this.count].text
  currentTime = this.moreNews[this.count].t2

  next() {
    this.count++
    this.currentNews = this.moreNews[this.count].text
    this.currentTime = this.moreNews[this.count].t2
    if (this.count == 2) {
      this.count = 0
    }

  }
  prev() {
    this.count--
    this.currentNews = this.moreNews[this.count].text
    this.currentTime = this.moreNews[this.count].t2
    if (this.count == 0) {
      this.count = 2
    }
  }


  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "autoplaySpeed": 1000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [

      {
        "breakpoint": 1026,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 769,
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
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  }
}
