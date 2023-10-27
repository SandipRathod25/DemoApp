import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';
import { TrendingComponent } from './trending/trending.component';
import { HappeningComponent } from './happening/happening.component';
import { LearnComponent } from './learn/learn.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HappeningComponent,
    LearnComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NewsComponent,
    TrendingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
