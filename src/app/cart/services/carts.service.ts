import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  public prodCountSubject = new BehaviorSubject<number>(0);
  prodCount$ = this.prodCountSubject.asObservable();

  CartapiUrl = environment.CartapiUrl;

  constructor(private http: HttpClient) 
  { 
    this.initializeProdCount();
  }
 
  initializeProdCount(): void {
    const userIdString = localStorage.getItem('userId');
    const userId = userIdString !== null ? Number(userIdString) : null;
    if (userId !== null) {
      this.getProdCount(userId).subscribe(count => {
        this.prodCountSubject.next(count);
      });
    }
  }

  updateCart(cart: Cart) {
    this.prodCountSubject.next(cart.prodCount);
  }

  public addProductToCart(userID : number , productID:number) : Observable<any>
  {
    return this.http.post(`${this.CartapiUrl}/addProduct`, {userID,productID});
  }

  public getProdCount(userID : number): Observable<number>
  {
    return this.http.get<number>(`${this.CartapiUrl}/getProdCount/${userID}`);
  }
}
