import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorySelectedSubject = new Subject<string>();
  categorySelected$ = this.categorySelectedSubject.asObservable();

  selectCategory(category: string) {
    this.categorySelectedSubject.next(category);
  }
}
