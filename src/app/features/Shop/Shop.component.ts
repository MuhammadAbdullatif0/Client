import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ShopService } from '../../core/Services/Shop.service';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-Shop',
  standalone: true,
  imports:[
    MatCard
  ],
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.css'],
})
export class ShopComponent implements OnInit {
  private shopService = inject(ShopService);
  products: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.shopService.getProduct().subscribe({
      next: (res) => (this.products = res.data),
      error: (error) => console.log(error),
    });
  }
}
