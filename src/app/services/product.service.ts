import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = 'http://localhost/Products/api/products/';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + '/AllProducts');
  }
  getProduct(productID: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/GetProduct/' + productID);
  }
  createProduct(product: Product): Observable<Product>{
    const httpoptions = { headers: new HttpHeaders({'Content-Type': 'application/json' })};
    return this.http.post<Product>(this.url + '/InsertProduct/', product, httpoptions);
  }
  updateProducts(productID: string, product: Product): Observable<Product> {
    const httpoptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.put<Product>(this.url + '/UpdateProduct?id=' + productID, product, httpoptions );
  }
  deleteProducts(productID: string): Observable<Product> {
    const httpoptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.delete<Product>(this.url + '/DeleteProduct?id=' + productID, httpoptions);
  }
}
