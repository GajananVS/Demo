import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
allProduct: Product[];
  constructor(private productService: ProductService, private router: Router ) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') !== 'admin') {
      this.router.navigate(['/']);
    }
    this.productService.getProducts().subscribe( p => {
      this.allProduct = p;
    } );
  }
}
