import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionHeroComponent } from './pages/home/section-hero/section-hero.component';
import { SectionQualityComponent } from './pages/home/section-quality/section-quality.component';
import { SectionCategoriesComponent } from './pages/home/section-categories/section-categories.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SectionHeroComponent,
    SectionQualityComponent,
    SectionCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
