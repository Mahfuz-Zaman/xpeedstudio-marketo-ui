import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OfferBannerComponent } from './offer-banner/offer-banner.component';
import { BottomMostFooterComponent } from './bottom-most-footer/bottom-most-footer.component';
import { BasicFooterComponent } from './basic-footer/basic-footer.component';
import { BadgeSectionComponent } from './badge-section/badge-section.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeroSectionComponent,
    OfferBannerComponent,
    BottomMostFooterComponent,
    BasicFooterComponent,
    BadgeSectionComponent,
    WomenClothingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
