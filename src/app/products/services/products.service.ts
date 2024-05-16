import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.production';
import { Product } from '../components/all-products/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    ProdApiUrl =environment.ProdapiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.ProdApiUrl}/all`);
  }
}
