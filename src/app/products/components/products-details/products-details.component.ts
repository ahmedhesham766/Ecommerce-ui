import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/Product';
import { DialogServiceWrapper } from 'src/app/shared/services/dialog/dialog.service';
import { CartsService } from 'src/app/cart/services/carts.service';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/shared/services/color/color.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  id: number | null = null;
  data:Product | null = null;
  selectedImageUrl: string | undefined;
  loading:boolean =false;
  selectedColor: string | undefined;
  constructor(private router : ActivatedRoute ,
              private service : ProductsService,
              private dialogServiceWrapper: DialogServiceWrapper,
              private cartService : CartsService,
              private toastr : ToastrService,
              private colorService: ColorService
             )
  {
    const idParam = this.router.snapshot.paramMap.get("id");
    this.id = idParam ? Number(idParam) : null;
  }
  
  ngOnInit(): void {
    this.colorService.currentColor.subscribe(color => this.selectedColor = color);
    this.getProduct(this.id);
  }

  getProduct(id:any)
  {
    this.loading = true;
    this.service.getProductById(id).subscribe(
      (response) =>{
        this.loading = false;
        this.data = response;
        this.selectedImageUrl = response.images[0].imageUrl;
        this.data.stock = response.stock;
        this.service.updateStock(this.data);
      }
      
    )
    this.service.currentStock.subscribe((product) => {
      if (product) {
        this.data = product;
      }
    });
  }

  showImg(src: string) {
    this.selectedImageUrl = src;
  }

  addToCart(id: number | null)
  {
    if (id === null) {
      this.toastr.warning('Invalid product ID');
      return;
    }
    const userIdString  = localStorage.getItem('userId');
    const userId = userIdString  !== null ? Number(userIdString ) : null;
    if (!userId) {
        this.dialogServiceWrapper.openLoginDialog();
    }
    else{
      this.cartService.addProductToCart(userId,id).subscribe(
        (response) =>{
          if(response.cart)
            {
              this.toastr.success(response.message);
              this.cartService.updateCart(response.cart);
              if (this.data) {
                this.data.stock -= 1; // Update the local stock
                this.service.updateStock(this.data); // Notify the service
              }
            }
            else{
              this.toastr.warning(response.message)
            }
        }
      )
    }
  }
  selectColor(colorName: string): void {
    this.colorService.changeColor(colorName);
  }
}
