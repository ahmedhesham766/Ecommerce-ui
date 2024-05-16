import { NgModule } from '@angular/core';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports:[
    AllProductsComponent 
  ]
})
export class ProductsModule { }
