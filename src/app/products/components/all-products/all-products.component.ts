import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products !: Product[];
categories = [
  { name: 'Phone', displayName: 'Phones', icon: '📱', image: '../assets/images/13-colors.png' },
  { name: 'Clothes', displayName: 'Clothes', icon: '👕', image: '../assets/images/clothes.jpg' },
  { name: 'Laptops', displayName: 'Laptops', icon: '💻', image: '../assets/images/labtop.png' },
  { name: 'Play Station', displayName: 'Play Station', icon: '🎮', image: '../assets/images/ps.png' },
  { name: 'Monitors', displayName: 'Monitors', icon: '🖥️', image: '../assets/images/monitors.png' }
];
loading:boolean =false;
constructor(private service:ProductsService){}

  ngOnInit(): void {
   this.getProducts();
  }

  getProducts()
  {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (response : Product[]) => {
        this.loading = false;
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }

  onCategoryClick(categoryName: string) {
    this.loading = true;
    this.service.getProductsByCategoryName(categoryName).subscribe(
      (response : Product[]) => {
        this.loading =false;
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }
}



