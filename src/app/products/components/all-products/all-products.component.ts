import { Component, OnInit } from '@angular/core';
import { Product } from './model/Product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products !: Product[];

constructor(private service:ProductsService){}

  ngOnInit(): void {
   this.getProducts();
  }

  getProducts()
  {
    this.service.getAllProducts().subscribe(
      (response : Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }


}
