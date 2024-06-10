import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colorSource = new BehaviorSubject<string>('#1BBFE9');
  currentColor = this.colorSource.asObservable();

  constructor() { }

  changeColor(color: string) {
    this.colorSource.next(color);
  }
}
