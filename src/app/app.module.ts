import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MyApp } from './app.component';
import{ProductHome} from './ProductUI/product.component'
import{StarComponent} from './ProductUI/product-starcomponent';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    MyApp,
    ProductHome,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MyApp]
})
export class AppModule { }
