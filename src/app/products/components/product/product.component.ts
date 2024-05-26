import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data: any={};
@Output() item = new EventEmitter();

constructor(private router: Router) {}
  

  goToDetails() {
    this.router.navigate(['/products/details', this.data.productId]);
  }

  addToCart(event: MouseEvent){  
    event.stopPropagation();
    this.item.emit(this.data);
  }



}
