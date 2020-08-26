import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  productID: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
    ) { }
  ngOnInit(): any {
    this.product = new Product();
    this.route.paramMap.subscribe( para => {
      this.productID = para.get('id');
    });
    this.getproduct(this.productID);
  }
getproduct(pid: string): any {
  console.log(pid);
  this.productService.getProduct(pid).subscribe( p => {
  this.product = p;
  });
}
addToCart(product): void{
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
  console.log(product);
}
}
