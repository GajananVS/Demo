import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items;
totalPrice = 0;
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') !== 'admin') {
      this.router.navigate(['/']);
    }
    this.items = this.cartService.getItems();
    for (let index = 0; index < this.items.length; index++) {
       this.totalPrice = this.totalPrice + this.items[index].Price;
    }
  }
  getTotal(): number {
        return this.totalPrice;
  }
}
