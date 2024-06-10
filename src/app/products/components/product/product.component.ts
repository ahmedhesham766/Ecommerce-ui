import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/shared/services/color/color.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data: any={};
@Output() item = new EventEmitter();
selectedColor: string = '#1BBFE9';

constructor(private colorService: ColorService) {}
  

  addToCart(event: MouseEvent){  
    event.stopPropagation();
    this.item.emit(this.data);
  }

  selectColor(colorName: string,event: MouseEvent): void {
    event.stopPropagation();
    this.selectedColor = colorName;
    this.colorService.changeColor(colorName);
  }


}
