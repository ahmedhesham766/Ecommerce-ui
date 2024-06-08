import { Component, HostListener } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: string[] = ['Copia','Nike', 'Adidas', 'Puma', 'Reebok' ,'New Balance'];
  showDropdown: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  toggleDropdown(event: Event): void {
    event.preventDefault(); // Prevent default anchor click behavior
    this.showDropdown = !this.showDropdown;
    event.stopPropagation(); // Stop event from bubbling up
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.showDropdown = false;
    }
  }

  selectCategory(category: string): void {
    this.categoryService.selectCategory(category);
    this.showDropdown = false;
  }
}
