import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CelebratoryComponent } from './pages/celebratory/celebratory.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { BuyComponent } from './pages/buy/buy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RedZoomModule } from 'ngx-red-zoom';
import { MiniatureComponent } from './pages/miniature/miniature.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CatalogComponent,
    CelebratoryComponent,
    CorporateComponent,
    ContactComponent,
    LoginComponent,
    BuyComponent,
    HomeComponent,
    ProductDetailsComponent,
    MiniatureComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    RedZoomModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
