import { NgModule } from '@angular/core';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule
  ],
  exports:[
    AllProductsComponent ,
  ]
})
export class ProductsModule { }
