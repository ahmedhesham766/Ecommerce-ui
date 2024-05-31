import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CatgoryModule } from './category/catgory.module';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CatgoryModule,
    AuthModule ,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      timeOut: 1300,
      tapToDismiss: true,
      toastClass: 'ngx-toastr custom-toast'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
