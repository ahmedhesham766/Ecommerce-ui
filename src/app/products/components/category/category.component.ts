import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: string[] = ['Phones', 'Shoes', 'Clothes', 'Playstations'];
  showDropdown: boolean = false;
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
}
