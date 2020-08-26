import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product} from '../Models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }
  addToCart(product): void{
    this.items.push(product);
  }
  getItems(): any[]{
    return this.items;
  }
  clearCart(): any[]{
    this.items = [];
    return this.items;
  }
  getShippingPrices(): any {
    const newLocal = '../assets/shipping.json';
    return this.http.get(newLocal).toPromise().then(
      data => {
        console.log(data);
      }
    );
  }

}
