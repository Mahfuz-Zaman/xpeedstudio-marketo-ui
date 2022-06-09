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
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { ComputerLaptopComponent } from './computer-laptop/computer-laptop.component';
import { HandWatchComponent } from './hand-watch/hand-watch.component';
import { GadgetSectionComponent } from './gadget-section/gadget-section.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectorComponent } from './top-categories/projector/projector.component';
import { GoogleGlassComponent } from './top-categories/google-glass/google-glass.component';
import { HeadphoneComponent } from './top-categories/headphone/headphone.component';
import { LightComponent } from './top-categories/light/light.component';
import { LaptopComponent } from './top-categories/laptop/laptop.component';
import { HotSellComponent } from './hot-sell/hot-sell.component';
import { SixteenComponent } from './hot-sell/sixteen/sixteen.component';
import { TwentyfiveComponent } from './hot-sell/twentyfive/twentyfive.component';
import { ThirtythreeComponent } from './hot-sell/thirtythree/thirtythree.component';
import { CarouselModule } from './carousel/carousel.module';
import { RecentProductsComponent } from './recent-products/recent-products.component';
import { FeaturedComponent } from './recent-products/featured/featured.component';
import { TrendComponent } from './recent-products/trend/trend.component';
import { SaleComponent } from './recent-products/sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeroSectionComponent,
    OfferBannerComponent,
    BottomMostFooterComponent,
    BasicFooterComponent,
    BadgeSectionComponent,
    WomenClothingComponent,
    MenClothingComponent,
    MobilePhoneComponent,
    ComputerLaptopComponent,
    HandWatchComponent,
    GadgetSectionComponent,
    TopCategoriesComponent,
    ProjectorComponent,
    GoogleGlassComponent,
    HeadphoneComponent,
    LightComponent,
    LaptopComponent,
    HotSellComponent,
    SixteenComponent,
    TwentyfiveComponent,
    ThirtythreeComponent,
    RecentProductsComponent,
    FeaturedComponent,
    TrendComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,

    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
