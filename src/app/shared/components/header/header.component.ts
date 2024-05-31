import { Component } from '@angular/core';
import { CartsService } from 'src/app/cart/services/carts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  prodCount: number = 0;

  constructor(private cartService: CartsService) {}

  ngOnInit(): void {
    this.cartService.prodCount$.subscribe(count => {
      if (count === 0) {
        const userIdString = localStorage.getItem('userId');
        const userId = userIdString !== null ? Number(userIdString) : null;
        if (userId !== null) {
          this.cartService.getProdCount(userId).subscribe((fetchedCount:any) => {
            this.prodCount = fetchedCount.prodcount;
            this.cartService.prodCountSubject.next(this.prodCount);
          });
        }
      } else {
        this.prodCount = count;
      }
    });
  }
  
}
