import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CelebratoryComponent } from './pages/celebratory/celebratory.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'catalog', component:CatalogComponent},
  {path:'celebratory',component:CelebratoryComponent},
  {path:'corporate', component:CorporateComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'buy', component:BuyComponent},
  {path: 'catalog/:id', component: ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
