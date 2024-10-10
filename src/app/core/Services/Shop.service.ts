import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/Pagination';
import { Product } from '../../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5001/api/';
  products: Product[] = [];
  constructor() {}

  getProduct() {
    return this.http.get<Pagination<Product>>(this.baseUrl + 'Products');
  }
}
