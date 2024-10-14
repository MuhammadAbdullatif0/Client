import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatCardContent,
    MatCardActions,
    CurrencyPipe,
    MatButton,
  ],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product?: Product;
}
