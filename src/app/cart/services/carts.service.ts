import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  CartapiUrl = environment.CartapiUrl;
  constructor(private http: HttpClient) { }

  public addProductToCart(userID : number , productID:number) : Observable<any>
  {
    return this.http.post(`${this.CartapiUrl}/addProduct`, {userID,productID});
  }
}
