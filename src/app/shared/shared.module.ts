import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CatgoryModule } from '../category/catgory.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CatgoryModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
