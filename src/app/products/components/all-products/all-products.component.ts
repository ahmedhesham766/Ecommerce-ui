import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/category/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products !: Product[];
loading:boolean =false;
selectedCategory: string ="";
cartProducts : any[] = [];
private categorySubscription: Subscription = new Subscription;

constructor(private service:ProductsService , private categoryService: CategoryService){}

  ngOnInit(): void {
   this.getProducts();
   this.subscribeToCategorySelection();
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

  private subscribeToCategorySelection(): void {
    this.categorySubscription = this.categoryService.categorySelected$.subscribe(
      (category: string) => {
        this.getProductsByCategory(category);
      }
    );
  }

  private getProductsByCategory(category: string): void {
    this.selectedCategory = category.toLowerCase(); 
    if(this.selectedCategory == 'copia')
      {
        this.getProducts();
        return;
      }
    this.service.getProductsByCategoryName(category).subscribe(
      (response : Product[]) => {
        this.loading = false;
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  addToCart(event:any)
  {
    const userId = localStorage.getItem('userId');
    if (!userId) {
     
      //this.openLoginPopup(); //open login component 
      return;
    }
      //   if("cart" in localStorage)
  //   {
  //     this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  //     let itemExist = this.cartProducts.find(item => item.id == event.id);
  //     if(itemExist)
  //       {
  //         alert("this product already in cart")
  //       }
  //   }
  //   this.cartProducts.push(event);
  //   localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  // }
  }

}



