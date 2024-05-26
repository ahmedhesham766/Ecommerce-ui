import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  id : any;
  data : any= {};
  selectedImageUrl: string | undefined;

  constructor(private router : ActivatedRoute ,private service : ProductsService )
  {
    this.id = this.router.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  
  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(id:any)
  {
    this.service.getProductById(id).subscribe(
      (response) =>{
        this.data = response
        console.log(response.images[0].imageUrl);
        this.selectedImageUrl = response.images[0].imageUrl;
      }
    )
  }

  showImg(src: string) {
    this.selectedImageUrl = src;
  }

}
