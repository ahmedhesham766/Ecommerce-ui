import { NgModule } from '@angular/core';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AllProductsComponent ,
    CategoryComponent
  ]
})
export class ProductsModule { }
