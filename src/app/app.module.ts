import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionHeroComponent } from './pages/home/section-hero/section-hero.component';
import { SectionQualityComponent } from './pages/home/section-quality/section-quality.component';
import { SectionCategoriesComponent } from './pages/home/section-categories/section-categories.component';
import { SectionVideoComponent } from './pages/home/section-video/section-video.component';
import { SectionAboutComponent } from './pages/home/section-about/section-about.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CardsComponent } from './pages/product-list/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SectionHeroComponent,
    SectionQualityComponent,
    SectionCategoriesComponent,
    SectionVideoComponent,
    SectionAboutComponent,
    ProductComponent,
    ProductListComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
